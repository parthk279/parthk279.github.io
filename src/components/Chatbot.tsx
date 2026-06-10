"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  knowledge,
  greeting,
  suggestedQuestions,
  fallback,
} from "@/data/chatKnowledge";

type Message = { from: "bot" | "user"; text: string };

// Score a user message against every knowledge entry; return the best response.
function findResponse(input: string): string {
  const text = input.toLowerCase();
  let best = { score: 0, response: fallback };

  for (const entry of knowledge) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (text.includes(kw)) {
        // Longer keyword matches are worth more (more specific).
        score += kw.length > 4 ? 2 : 1;
      }
    }
    if (score > best.score) {
      best = { score, response: entry.response };
    }
  }
  return best.response;
}

// Minimal markdown: **bold** + newlines. Safe (no raw HTML injected).
function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i} className="block">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-display font-bold text-primary-dark">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </span>
    );
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: greeting },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reveal the button after mount (matches the template's pop-in).
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = useCallback((raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);

    // Simulate the guide "thinking" by the fire.
    const delay = 500 + Math.min(text.length * 12, 700);
    setTimeout(() => {
      const response = findResponse(text);
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: response }]);
    }, delay);
  }, []);

  return (
    <>
      {/* Floating campfire button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Parth's campfire guide"
        className="fixed bottom-6 right-6 z-50 group"
        style={{
          transform: mounted
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0)",
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          className="absolute -inset-3 rounded-2xl blur-xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,130,54,0.4) 0%, rgba(255,184,0,0.15) 50%, transparent 70%)",
            animation: "chat-glow-pulse 3s ease-in-out infinite",
          }}
        />
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-amber-600/80 group-hover:border-gold transition-colors"
          style={{
            background:
              "linear-gradient(145deg, #3A2A1A 0%, #2A1C10 50%, #1E140C 100%)",
            boxShadow:
              "0 4px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,184,0,0.15), 0 0 20px rgba(255,130,54,0.15)",
          }}
        >
          {/* corner rivets */}
          <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
          <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
          <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-700/60" />
          {/* campfire icon */}
          <span className="text-2xl" aria-hidden="true">
            {open ? "✕" : "🔥"}
          </span>
        </div>
        {!open && (
          <span
            className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-display font-semibold text-parchment opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background: "rgba(58,42,26,0.95)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Talk to me
          </span>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl overflow-hidden wood-card shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-primary/20 bg-gradient-to-r from-[#3a2a1a] to-[#2a1c10]">
            <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary/20 border border-gold/40 text-lg">
              🔥
            </span>
            <div>
              <p className="font-display font-bold text-parchment text-sm leading-tight">
                Campfire Guide
              </p>
              <p className="text-[11px] text-gold/70 leading-tight">
                Ask me about Parth
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto px-4 py-4 space-y-3 bg-[#1a1209]"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-night font-medium rounded-br-sm"
                      : "parchment-card text-bark rounded-bl-sm"
                  }`}
                >
                  {m.from === "bot" ? renderText(m.text) : m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="parchment-card px-4 py-3 rounded-2xl rounded-bl-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-dark animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-dark animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-dark animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          {messages.length <= 1 && (
            <div className="px-3 py-2 flex flex-wrap gap-1.5 bg-[#1a1209] border-t border-primary/10">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="px-2.5 py-1 text-[11px] font-display font-semibold rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-primary/20 bg-[#2a1c10]"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-[#1a1209] text-parchment placeholder:text-muted/40 text-sm rounded-lg px-3 py-2 border border-primary/20 focus:border-primary/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-night hover:bg-gold transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
