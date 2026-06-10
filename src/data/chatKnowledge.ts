// Knowledge base for the scripted campfire chatbot.
// Each entry has trigger keywords and a response. The bot scores the user's
// message against every entry's keywords and replies with the best match.
// Fully client-side — no API, works on static GitHub Pages.

export type KnowledgeEntry = {
  keywords: string[];
  response: string;
};

export const greeting =
  "Hail, traveler! 🔥 Pull up a log by the fire. I'm Parth's campfire guide — ask me about his work, projects, skills, or experience and I'll share what I know.";

export const suggestedQuestions = [
  "What does Parth do?",
  "Tell me about his projects",
  "What are his strongest skills?",
  "Where has he worked?",
  "How can I reach him?",
];

export const fallback =
  "That one's beyond my map, traveler. Try asking about Parth's **work**, **projects**, **skills**, **experience**, **education**, **publications**, or **how to reach him**. Or tap one of the suggestions below.";

export const knowledge: KnowledgeEntry[] = [
  {
    keywords: ["who", "what", "do", "about parth", "yourself", "summary", "bio", "tldr", "role", "title"],
    response:
      "Parth Katlana is a **Data Scientist / ML Engineer** with 3+ years building and deploying production AI systems — from agentic LLM workflows and RAG pipelines to distributed deep learning on cloud-native infrastructure. He's currently at **NCICS (a NOAA affiliate)** in Santa Clara, turning massive climate datasets into real-world impact.",
  },
  {
    keywords: ["project", "projects", "built", "build", "portfolio", "work on", "quest"],
    response:
      "A few legendary quests from his log ⚔️:\n\n**I. Agentic AI System for Climate Data** — autonomously plans multi-step workflows over 12–25 TB/mo of satellite data, cutting time-to-insight from ~3 hrs to 20 min.\n**II. Metric Ensemble for Hallucination Detection** — 0.91 Pearson correlation, beating the prior state-of-the-art (published on arXiv).\n**III. Evolutionary Neural Architecture Search** — LLM agents propose model mutations and select optimal designs via multi-objective fitness.\n**IV. Agentic Credit-Risk Underwriting** — multi-agent system (LangGraph) with RAG-based Basel III/IV validation and SHAP explanations.",
  },
  {
    keywords: ["skill", "skills", "tech", "stack", "technology", "technologies", "languages", "tools", "good at", "strongest", "abilities"],
    response:
      "His skill tree 🌳:\n\n• **Languages/DB:** Python, SQL, R, Java, PostgreSQL, MongoDB, Snowflake\n• **GenAI/LLMs:** LangChain, RAG, Agentic Workflows, LLM Evaluation, Fine-tuning, Vector DBs\n• **ML/DL:** PyTorch, TensorFlow, XGBoost, Transformers, BERT, CLIP, YOLOv8, distributed training (FSDP/CUDA)\n• **Cloud/MLOps:** AWS (SageMaker, Bedrock, Step Functions), GCP, Databricks, Spark, Kafka, Airflow, MLflow, Docker",
  },
  {
    keywords: ["experience", "worked", "work", "job", "jobs", "career", "company", "companies", "employer", "where"],
    response:
      "His journey so far 🗺️:\n\n• **NCICS – NOAA Affiliate** (Jan 2025 – Present) — Data Scientist. Secured a $500k NASA grant, shipped a production agentic AI system, productionized distributed deep learning.\n• **Laboratory of Analytical Sciences** (May 2023 – Aug 2024) — built an LLM evaluation framework + hallucination detector, fine-tuned CLIP/YOLOv8.\n• **Kion Technologies** (Aug 2019 – Jan 2022) — scaled A/B testing to 10M+ daily users, optimized ETL pipelines.",
  },
  {
    keywords: ["noaa", "ncics", "climate", "current", "now", "nasa", "grant", "satellite"],
    response:
      "Right now Parth is a Data Scientist at **NCICS, a NOAA affiliate**. Highlights from this stop: he **secured a $500k NASA grant** with a forecasting prototype that cut RMSE by 17.4% vs CNN baselines, shipped a **production agentic AI system** over 12–25 TB/mo of satellite data, and **cut GPU training cost by 40%** with FSDP/CUDA distributed training.",
  },
  {
    keywords: ["llm", "agentic", "agent", "rag", "langchain", "langgraph", "genai", "generative", "ai"],
    response:
      "LLMs & agents are Parth's specialty 🤖. He's shipped a **production agentic AI system** (LangChain, RAG) that autonomously plans multi-step workflows, built an **evolutionary agentic system** where LLM agents propose architecture mutations, orchestrated an **LLM ensemble** (Mistral, Llama-2, GPT-4), and authored an **LLM evaluation framework** with a hallucination detector at 0.91 Pearson correlation.",
  },
  {
    keywords: ["publication", "publications", "paper", "papers", "research", "arxiv", "published", "author"],
    response:
      "Parth co-authored **3 papers** on LLM reliability & evaluation 📜:\n\n1. *Metric Ensemble for Hallucination Detection* (Parth K., Grant Forbes) — on arXiv\n2. *Uncovering Factual Consistency Errors* (Zeydy Ortiz, Parth K.)\n3. *General Interface for Factored State Optimization Problems* (Marley C., Parth K., et al.)",
  },
  {
    keywords: ["education", "study", "studied", "school", "university", "degree", "masters", "master", "bachelor", "college", "nc state", "ncsu"],
    response:
      "His training grounds 🎓:\n\n• **M.S. Computer Science** — North Carolina State University, Raleigh (May 2024)\n• **B.E. Computer Science** — Symbiosis University, India (Jul 2022)",
  },
  {
    keywords: ["contact", "reach", "email", "hire", "connect", "linkedin", "github", "talk", "message", "raven", "get in touch", "available"],
    response:
      "Send a raven 🦅:\n\n• **Email:** katlanaparth@gmail.com\n• **LinkedIn:** linkedin.com/in/parth-katlana-945044a6\n• **GitHub:** github.com/parthk279\n\nScroll down to the **Treasure Found** chest for one-tap links, or grab his résumé there too.",
  },
  {
    keywords: ["resume", "cv", "download", "loot"],
    response:
      "You'll find his full adventure log (résumé) in the **Treasure Found** chest at the bottom of the page — tap **Loot** to download the PDF. 📜",
  },
  {
    keywords: ["mlops", "deploy", "deployment", "cloud", "aws", "infrastructure", "pipeline", "distributed", "scale", "production"],
    response:
      "MLOps is where Parth thrives ☁️. He's built **end-to-end ML pipelines on AWS** (Databricks, SageMaker, MLflow) with CI/CD that cut deployment time 30%, **productionized deep learning with FSDP/CUDA** (–40% GPU cost, 250 ms tile inference), and scaled **A/B testing infrastructure to 10M+ daily users**.",
  },
  {
    keywords: ["location", "where", "based", "live", "city", "new york", "nyc", "remote", "relocate"],
    response:
      "Parth is based in **Santa Clara, CA** and works remotely with NCICS/NOAA. ☀️",
  },
  {
    keywords: ["hi", "hello", "hey", "greetings", "yo", "sup", "howdy", "hail"],
    response:
      "Well met, traveler! 🔥 Ask me anything about Parth — his work, projects, skills, or how to reach him. The campfire's warm.",
  },
  {
    keywords: ["thanks", "thank", "ty", "appreciate", "cheers", "awesome", "cool", "nice", "great"],
    response:
      "Anytime, traveler. May your path be ever lit. 🔥 Anything else you'd like to know about Parth?",
  },
];
