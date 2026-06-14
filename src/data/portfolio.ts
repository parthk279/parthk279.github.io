export const profile = {
  name: { first: "Parth", last: "Katlana" },
  class: "Data Scientist",
  level: 25,
  title: "Data Scientist / ML Engineer",
  location: "Santa Clara, CA",
  tagline: "Building production AI systems that actually work when it matters most.",
  bio: `I'm an engineer who believes the most complex data should serve the most critical missions. Currently, I work with NCICS and NOAA, where I build scalable, cloud-native architectures to make sense of our world's climate data. With a Master's in Computer Science from NC State and a deep love for MLOps, I spend my time turning distributed systems into engines for real-world impact. I don't just build models — I build the infrastructure that ensures they actually work when it matters most.`,
  email: "katlanaparth@gmail.com",
  phone: "(984) 286-6759",
  social: {
    linkedin: "https://www.linkedin.com/in/parth-katlana-945044a6/",
    github: "https://github.com/parthk279",
    medium: "https://medium.com",
  },
  resumeUrl: "/resume.pdf",
  // Shown as a playful interests line at the bottom of the character sheet.
  interests: ["Loves building side projects", "Loves travelling", "Loves coffee"],
};

// A curated, flat list of headline skills for the character-sheet pills.
export const featuredSkills = [
  "Python", "SQL", "PyTorch", "LangChain", "RAG", "Agentic AI",
  "LLMs", "AWS", "SageMaker", "Spark", "MLflow", "Docker",
];

export const skills = {
  "Languages & Databases": [
    "Python", "SQL", "R", "Java", "PostgreSQL", "MySQL", "MongoDB", "NoSQL", "Snowflake",
  ],
  "GenAI & LLMs": [
    "LangChain", "RAG", "Agentic Workflows", "LLM Evaluation", "Prompt Engineering",
    "Fine-tuning", "Vector DB", "Hugging Face",
  ],
  "ML & Deep Learning": [
    "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Transformers", "BERT",
    "CNNs", "CLIP", "YOLOv8", "Bayesian Optimization", "Distributed Training (FSDP/CUDA)",
  ],
  "Cloud & MLOps": [
    "AWS (S3, SageMaker, Bedrock, Step Functions)", "GCP", "Databricks", "Spark",
    "Kafka", "Airflow", "MLflow", "Docker",
  ],
  "Analytics & Tools": [
    "Tableau", "Power BI", "Matplotlib", "Seaborn", "Git", "Jupyter",
    "JIRA", "CI/CD", "A/B Testing", "ETL",
  ],
};

export const experience = [
  {
    level: 25,
    short: "NCICS",
    role: "Data Scientist",
    company: "NCICS - NOAA Affiliate",
    location: "Remote",
    period: "Jan 2025 - Present",
    current: true,
    bullets: [
      "Secured $500k NASA grant by designing a novel forecasting prototype that reduced RMSE by 17.4% vs CNN baselines.",
      "Designed and shipped a production agentic AI system (LangChain, RAG, LLMs) that autonomously plans multi-step workflows over 12-25 TB/mo of satellite data, cutting time-to-insight from ~3 hrs to 20 min.",
      "Built an evolutionary agentic system where LLM agents propose model-architecture mutations, orchestrate training & evaluation via Step Functions, and select optimal designs through multi-objective fitness.",
      "Productionized deep learning models with FSDP and CUDA distributed training, reducing GPU training cost by 40% and tile inference latency to 250 ms.",
      "Designed and deployed end-to-end ML pipelines on AWS (Databricks, SageMaker, MLflow) for distributed preprocessing of geospatial and time-series data, reducing deployment time by 30%.",
      "Engineered A/B testing with CDC stakeholders, identifying an optimal signal-to-noise ratio that reduced false positive alerts by 12.5%.",
    ],
    tech: ["LangChain", "RAG", "AWS", "FSDP", "CUDA", "Databricks", "SageMaker", "MLflow"],
  },
  {
    level: 22,
    short: "LAS",
    role: "Data Scientist",
    company: "Laboratory of Analytical Sciences",
    location: "Raleigh, NC",
    period: "May 2023 - Aug 2024",
    current: false,
    bullets: [
      "Orchestrated an LLM ensemble (Mistral, Llama-2, GPT-4) with a ranking layer that transforms unstructured text into structured reports, reducing review time by 50%.",
      "Built an LLM evaluation framework with a metric-ensemble hallucination detector (0.91 Pearson correlation) to validate factual consistency, fairness, and robustness — published 2 papers.",
      "Fine-tuned in-house CLIP and YOLOv8 models for domain-specific detection, increasing mAP50-95 by 15%.",
      "Developed classification models (XGBoost, Logistic Regression) with Bayesian optimization for risk assessment.",
      "Led statistical and predictive modeling across the ML lifecycle (Python, SQL, Spark), driving a 15% increase in conversion.",
    ],
    tech: ["LLMs", "GPT-4", "CLIP", "YOLOv8", "XGBoost", "Python", "SQL", "Spark"],
  },
  {
    level: 19,
    short: "Kion",
    role: "Data Scientist",
    company: "Kion Technologies",
    location: "India",
    period: "Aug 2019 - Jan 2022",
    current: false,
    bullets: [
      "Scaled an A/B testing infrastructure to 10M+ daily active users, reducing system latency by 40% through ML model integration.",
      "Performed credit risk profiling and customer segmentation (logistic regression, K-Means) on structured and behavioral metadata.",
      "Optimized ETL pipelines across Snowflake and SQL Server, building regression and multivariate models enabling real-time KPI visibility.",
      "Built data visualizations (Power BI, Tableau, Matplotlib) that increased marketing campaign effectiveness by 25%.",
    ],
    tech: ["Python", "Snowflake", "SQL Server", "Power BI", "Tableau", "Docker"],
  },
];

export const education = [
  {
    school: "North Carolina State University",
    location: "Raleigh, NC",
    degree: "Master of Computer Science",
    year: "May 2024",
  },
  {
    school: "Symbiosis University",
    location: "India",
    degree: "Bachelor of Engineering, Computer Science",
    year: "Jul 2022",
  },
];

export const projects = [
  {
    number: "I",
    title: "Agentic AI System for Climate Data",
    description:
      "Production agentic system (LangChain, RAG, LLMs) that autonomously plans multi-step workflows — retrieving context, calling tools, running analyses, generating structured reports over 12-25 TB/mo of satellite data. Cut time-to-insight from ~3 hours to 20 minutes.",
    tech: ["LangChain", "RAG", "LLMs", "AWS Step Functions", "Python"],
    link: null,
  },
  {
    number: "II",
    title: "Metric Ensemble for Hallucination Detection",
    description:
      "Developed an ensemble approach for detecting hallucinations in abstractive text summarization. Combined unsupervised metrics to demonstrate LLM-based methods are more effective at identifying hallucinations, achieving 0.91 Pearson Correlation — surpassing the previous state-of-the-art.",
    tech: ["LLMs", "NLP", "Python", "Evaluation Metrics"],
    link: "https://arxiv.org/abs/2310.10495",
  },
  {
    number: "III",
    title: "Evolutionary Neural Architecture Search",
    description:
      "Built an evolutionary agentic system where LLM agents propose model-architecture mutations, orchestrate training & evaluation via Step Functions, and select optimal designs through multi-objective fitness with built-in failure handling.",
    tech: ["LLMs", "AWS Step Functions", "PyTorch", "FSDP", "CUDA"],
    link: null,
  },
  {
    number: "IV",
    title: "Agentic Credit-Risk Underwriting",
    description:
      "Multi-agent system (LangGraph, LLMs) automating PD scoring (XGBoost), RAG-based Basel III/IV regulatory validation, and SHAP-driven decision explanations for transparent, compliant credit decisions.",
    tech: ["LangGraph", "LLMs", "XGBoost", "RAG", "SHAP"],
    link: null,
  },
];

export const sideQuests = [
  {
    title: "Traffic Monitoring System",
    description:
      "Computer Vision system using HOG/SVM classifiers to reduce wait times for cars and pedestrians in high-traffic zones.",
    tech: ["Python", "OpenCV", "ML"],
    link: "https://github.com/parthk279/Traffic-Monitoring-System",
  },
  {
    title: "Find My Roomie",
    description:
      "Web app for NC State students to find roommates, built with Django, React, and PostgreSQL following software engineering best practices.",
    tech: ["Django", "React", "PostgreSQL", "Python"],
    link: "https://github.com/Nikhil1912/FindMyRoomie_2.0",
  },
  {
    title: "Music Genre Classification",
    description:
      "Classifier working with frequencies and amplitude to categorize sound clips, with a recommender system using SVMs, Random Forests, and Neural Networks.",
    tech: ["Python", "PyTorch", "Librosa", "Scikit-learn"],
    link: null,
  },
];

export const achievements = [
  { rank: "$500k", color: "#FFB800", title: "NASA Grant" },
  { rank: "0.91", color: "#FFA866", title: "Hallucination Detector" },
  { rank: "3", color: "#94A3B8", title: "Papers Published" },
  { rank: "40%", color: "#CD7F32", title: "GPU Cost Cut" },
  { rank: "35+", color: "#4A7A2E", title: "Certifications" },
  { rank: "10M+", color: "#FFB800", title: "Users Scaled (A/B)" },
];

export const publications = [
  {
    title: "Metric Ensemble for Hallucination Detection",
    authors: "Parth K., Grant Forbes",
    link: "https://arxiv.org/abs/2310.10495",
  },
  {
    title: "Uncovering Factual Consistency Errors",
    authors: "Zeydy Ortiz, Parth K.",
    link: null,
  },
  {
    title: "General Interface for Factored State Optimization Problems",
    authors: "Marley C., Parth K., Chris K., Akhil N.",
    link: null,
  },
];
