"use client";

import { useEffect, useRef } from "react";

// Cursor-reveal image: a WebGL "fluid brush" paints away the front (base) image
// to reveal the back (reveal) image through a soft, organic, self-healing mask.
// Faithful port of the reference template's shader effect.

const VERT = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Brush shader — accumulates/fades the paint mask into a ping-pong texture.
const BRUSH_FRAG = `
  precision highp float;
  varying vec2 v_uv;

  uniform sampler2D u_prev;
  uniform vec2 u_mouse;
  uniform float u_hover;
  uniform float u_aspect;
  uniform float u_time;
  uniform float u_fadeSpeed;
  uniform float u_brushSize;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec2 uv = v_uv;

    float prev = texture2D(u_prev, uv).r;
    // Hold near-full values, then fade quickly once they start dropping.
    float fade = prev > 0.85 ? 0.001 : u_fadeSpeed * 3.0;
    prev = prev * (1.0 - fade) - 0.004;
    prev = max(prev, 0.0);

    vec2 diff = uv - u_mouse;
    diff.x *= u_aspect;
    float dist = length(diff);

    float angle = atan(diff.y, diff.x);
    float n1 = noise(vec2(angle * 3.0 + u_time * 0.5, u_time * 0.3)) * 0.4;
    float n2 = noise(vec2(angle * 7.0 - u_time * 0.8, dist * 10.0)) * 0.2;
    float brushRadius = u_brushSize + (n1 + n2) * u_brushSize * 0.6;

    float brush = smoothstep(brushRadius, brushRadius * 0.3, dist) * u_hover;
    brush = min(brush * 1.3, 1.0);

    float mask = max(prev, brush);
    gl_FragColor = vec4(mask, mask, mask, 1.0);
  }
`;

// Display shader — blends base→reveal by the painted mask.
const DISPLAY_FRAG = `
  precision highp float;
  varying vec2 v_uv;

  uniform sampler2D u_base;
  uniform sampler2D u_reveal;
  uniform sampler2D u_mask;
  uniform float u_aspect;
  uniform float u_time;
  uniform float u_hover;
  uniform float u_brushSize;

  void main() {
    vec2 uv = v_uv;
    float brushMask = texture2D(u_mask, uv).r;
    brushMask += (u_aspect + u_time + u_hover + u_brushSize) * 0.0;

    vec4 baseColor = texture2D(u_base, uv);
    vec4 revealColor = texture2D(u_reveal, uv);
    vec3 finalColor = mix(baseColor.rgb, revealColor.rgb, brushMask);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

function program(
  gl: WebGLRenderingContext,
  vs: WebGLShader,
  fs: WebGLShader
) {
  const p = gl.createProgram();
  if (!p) return null;
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(p));
    return null;
  }
  return p;
}

function makeTarget(gl: WebGLRenderingContext, w: number, h: number) {
  const tex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  const fb = gl.createFramebuffer()!;
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return { fb, tex };
}

function loadTexture(gl: WebGLRenderingContext, src: string): Promise<WebGLTexture> {
  return new Promise((resolve) => {
    const tex = gl.createTexture()!;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      resolve(tex);
    };
    img.src = src;
  });
}

type Props = {
  baseSrc: string;
  revealSrc: string;
  alt: string;
  className?: string;
  brushSize?: number;
  fadeSpeed?: number;
};

export default function RevealImage({
  baseSrc,
  revealSrc,
  alt,
  className = "",
  brushSize = 0.12,
  fadeSpeed = 0.008,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({
    mouseX: 0.5,
    mouseY: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    hover: 0,
    targetHover: 0,
    startTime: 0,
    lastInputTime: 0,
    raf: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: false });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const brushFs = compile(gl, gl.FRAGMENT_SHADER, BRUSH_FRAG);
    const dispFs = compile(gl, gl.FRAGMENT_SHADER, DISPLAY_FRAG);
    const vs2 = compile(gl, gl.VERTEX_SHADER, VERT);
    if (!vs || !brushFs || !dispFs || !vs2) return;

    const brushProg = program(gl, vs, brushFs);
    const dispProg = program(gl, vs2, dispFs);
    if (!brushProg || !dispProg) return;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const bu = {
      aPos: gl.getAttribLocation(brushProg, "a_position"),
      prev: gl.getUniformLocation(brushProg, "u_prev"),
      mouse: gl.getUniformLocation(brushProg, "u_mouse"),
      hover: gl.getUniformLocation(brushProg, "u_hover"),
      aspect: gl.getUniformLocation(brushProg, "u_aspect"),
      time: gl.getUniformLocation(brushProg, "u_time"),
      fadeSpeed: gl.getUniformLocation(brushProg, "u_fadeSpeed"),
      brushSize: gl.getUniformLocation(brushProg, "u_brushSize"),
    };
    const du = {
      aPos: gl.getAttribLocation(dispProg, "a_position"),
      base: gl.getUniformLocation(dispProg, "u_base"),
      reveal: gl.getUniformLocation(dispProg, "u_reveal"),
      mask: gl.getUniformLocation(dispProg, "u_mask"),
      aspect: gl.getUniformLocation(dispProg, "u_aspect"),
      time: gl.getUniformLocation(dispProg, "u_time"),
      hover: gl.getUniformLocation(dispProg, "u_hover"),
      brushSize: gl.getUniformLocation(dispProg, "u_brushSize"),
    };

    let mw = 512;
    let mh = 512;
    let a = makeTarget(gl, mw, mh);
    let b = makeTarget(gl, mw, mh);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const nw = Math.round(rect.width * dpr * 0.5);
      const nh = Math.round(rect.height * dpr * 0.5);
      if (nw !== mw || nh !== mh) {
        mw = nw;
        mh = nh;
        gl.deleteTexture(a.tex);
        gl.deleteFramebuffer(a.fb);
        gl.deleteTexture(b.tex);
        gl.deleteFramebuffer(b.fb);
        a = makeTarget(gl, mw, mh);
        b = makeTarget(gl, mw, mh);
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const setupAttrib = (loc: number) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    };

    let baseTex: WebGLTexture | null = null;
    let revealTex: WebGLTexture | null = null;
    let running = true;
    const s = state.current;
    s.startTime = performance.now();
    s.lastInputTime = s.startTime;

    Promise.all([loadTexture(gl, baseSrc), loadTexture(gl, revealSrc)]).then(
      ([bt, rt]) => {
        baseTex = bt;
        revealTex = rt;
      }
    );

    const frame = () => {
      if (!running) return;
      const now = performance.now();
      const t = (now - s.startTime) / 1000;

      // Ease cursor + hover toward targets.
      s.mouseX += (s.targetX - s.mouseX) * 0.07;
      s.mouseY += (s.targetY - s.mouseY) * 0.07;
      s.hover += (s.targetHover - s.hover) * 0.05;

      let cx = s.mouseX;
      let cy = s.mouseY;
      let h = s.hover;

      // Idle auto-demo: after 2s idle, sweep a diagonal hint every 7s.
      if (s.hover < 0.05) {
        const idle = (now - s.lastInputTime) / 1000;
        if (idle > 2) {
          const k = idle - 2;
          const r = k - 7 * Math.floor(k / 7);
          if (r >= 0 && r <= 2.4) {
            const e = r / 2.4;
            const wob =
              0.045 * Math.sin(e * Math.PI * 2.8 + Math.sin(0.6 * t)) +
              0.02 * Math.sin(e * Math.PI * 4.5 - 0.9 * t);
            cx = Math.min(0.96, Math.max(0.04, 0.15 + 0.7 * e + wob));
            cy = Math.min(0.96, Math.max(0.04, 0.85 - 0.7 * e - wob));
            h = 1;
          }
        }
      }

      if (baseTex && revealTex) {
        const aspect = canvas.width / canvas.height;

        // Pass 1 — paint into b's framebuffer, sampling a's texture.
        gl.bindFramebuffer(gl.FRAMEBUFFER, b.fb);
        gl.viewport(0, 0, mw, mh);
        gl.useProgram(brushProg);
        setupAttrib(bu.aPos);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, a.tex);
        gl.uniform1i(bu.prev, 0);
        gl.uniform2f(bu.mouse, cx, cy);
        gl.uniform1f(bu.hover, h);
        gl.uniform1f(bu.aspect, aspect);
        gl.uniform1f(bu.time, t);
        gl.uniform1f(bu.fadeSpeed, fadeSpeed);
        gl.uniform1f(bu.brushSize, brushSize);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // Pass 2 — display base/reveal blended by mask (b.tex).
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.useProgram(dispProg);
        setupAttrib(du.aPos);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, baseTex);
        gl.uniform1i(du.base, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, revealTex);
        gl.uniform1i(du.reveal, 1);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, b.tex);
        gl.uniform1i(du.mask, 2);
        gl.uniform1f(du.aspect, aspect);
        gl.uniform1f(du.time, t);
        gl.uniform1f(du.hover, h);
        gl.uniform1f(du.brushSize, brushSize);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // Swap ping-pong targets.
        const tmp = a;
        a = b;
        b = tmp;
      }

      s.raf = requestAnimationFrame(frame);
    };
    s.raf = requestAnimationFrame(frame);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      s.targetX = (e.clientX - rect.left) / rect.width;
      s.targetY = 1 - (e.clientY - rect.top) / rect.height;
      s.lastInputTime = performance.now();
    };
    const onEnter = () => {
      s.targetHover = 1;
      s.lastInputTime = performance.now();
    };
    const onLeave = () => {
      s.targetHover = 0;
      s.lastInputTime = performance.now();
    };
    const onTouch = (e: TouchEvent) => {
      const tt = e.touches[0] ?? e.changedTouches[0];
      if (!tt) return;
      const rect = canvas.getBoundingClientRect();
      s.targetX = (tt.clientX - rect.left) / rect.width;
      s.targetY = 1 - (tt.clientY - rect.top) / rect.height;
      s.targetHover = 1;
      s.lastInputTime = performance.now();
    };
    const onTouchEnd = () => {
      s.targetHover = 0;
      s.lastInputTime = performance.now();
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      running = false;
      cancelAnimationFrame(s.raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [baseSrc, revealSrc, brushSize, fadeSpeed]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={className}
      style={{ cursor: "none", touchAction: "none" }}
    />
  );
}
