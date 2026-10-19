export const personalInfo = {
  name: "Subrahmanya Shivaram Hegde",
  title: "AI Engineer | Agentic AI · RAG · Edge LLMs",
  summary:
    "AI Engineer with 1+ year of industry experience building production RAG systems, multi-agent LLM applications, and edge AI pipelines. Experienced across the full delivery lifecycle: designing microservice backends with FastAPI, optimising local LLMs for low-spec devices, and shipping containerised workloads to GCP through CI/CD.",
  location: "Bengaluru, Karnataka, India",
  email: "subrahmanyashegde2413@gmail.com",
  phone: "+91 7019742330",
  github: "https://github.com/subrahmanyahegde24",
  linkedin: "https://linkedin.com/in/subrahmanya24",
  taglines: [
    "AI Engineer",
    "Agentic AI Builder",
    "RAG Systems Engineer",
    "Edge LLM Optimiser",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Openecore Private Limited (formerly Kruthak Technology)",
    role: "Associate AI Engineer",
    type: "full-time",
    period: "June 2026 – Present",
    location: "Bengaluru, Karnataka, India",
    points: [
      "Building a self-hosted restaurant ordering platform running entirely on an on-premise server inside the hotel, covering table-side tablet ordering, a real-time Kitchen Display System (KDS), and an admin console for menu, table, and order management.",
      "Designed the system for fully local-network operation with zero cloud dependency, keeping all operational and customer data on site.",
      "Structuring collected order data to power a recommendation engine for personalised dish suggestions and menu insights.",
    ],
    tech: ["Python", "FastAPI", "On-Premise", "Real-time KDS", "Recommendation Systems"],
  },
  {
    id: 2,
    company: "Kruthak Technology Private Limited",
    role: "Junior Edge AI Engineer",
    type: "full-time",
    period: "January 2026 – May 2026",
    location: "Bengaluru, Karnataka, India",
    points: [
      "Refactored a monolithic backend into microservices (Auth, Vision, Analytics), cutting average inter-service response time by ~30% and enabling independent deployments.",
      "Engineered Agentic RAG workflows for LexiGuid, an AI educational assistant, using LangChain with hybrid search over ChromaDB and Qdrant, and integrated OpenCV for real-time visual query analysis.",
      "Optimised local LLMs (Gemma via Ollama) through quantisation, reducing inference latency by ~40% for offline-first use on low-spec devices.",
      "Automated container builds and deployment to GCP Cloud Run with GitHub Actions CI/CD, reducing deployment time from ~45 min to ~8 min.",
    ],
    tech: ["LangChain", "Qdrant", "ChromaDB", "OpenCV", "Gemma", "Ollama", "GCP Cloud Run", "GitHub Actions"],
  },
  {
    id: 3,
    company: "Kruthak Technology Private Limited",
    role: "Software Engineering Trainee",
    type: "full-time",
    period: "July 2025 – December 2025",
    location: "Bengaluru, Karnataka, India",
    points: [
      "Built the LexiGuid MVP, designing the foundational RAG pipeline and Qdrant vector search, served through Dockerised FastAPI microservices on GCP Cloud Run.",
      "Developed a Python + OpenCV video-to-frame pipeline for COFRO (coffee ripeness detection), preserving blur, low-light, and motion artifacts to improve YOLOX generalisation in field conditions.",
      "Annotated ~30K images across 7 ripeness classes in Roboflow and scaled the dataset to ~300K through augmentation, for a model deployed on the Hailo-8L edge accelerator.",
    ],
    tech: ["Python", "RAG", "Qdrant", "FastAPI", "Docker", "OpenCV", "YOLOX", "Roboflow", "Hailo-8L"],
  },
];

export const education = [
  {
    institution: "Vivekananda College of Engineering & Technology, Puttur",
    degree: "Bachelor of Engineering",
    field: "Artificial Intelligence & Machine Learning",
    period: "December 2021 – December 2025",
    grade: "CGPA: 8.83/10",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Software Engineering",
      "Operating Systems",
      "DBMS",
      "Data Structures",
    ],
  },
];

export const certifications = [
  {
    name: "Career Essentials in Generative AI — Microsoft & LinkedIn Learning (Sep 2026)",
    link: "https://drive.google.com/file/d/1uXfvnQfv_QJpSAOalH6rgGlh4fKMDRkS/view?usp=sharing",
  },
  {
    name: "GitHub Tutorial for Beginners — Great Learning (Sep 2026)",
    link: "https://drive.google.com/file/d/18gbzYFEe5-c1scwyRonBu0c-DAg2BA5s/view?usp=sharing",
  },
  {
    name: "Cognitive Customer Insights with Watson AI — IBM & Rooman Technologies (May 2025)",
    link: "https://drive.google.com/file/d/15HgUzUjRYT3kt0-g29uxTNPAp5zg44Z9/view?usp=sharing",
  },
];

export const achievements = [
  "Seed Funding — PROJECT CODE UNNATI (Seventh Sense, Feb 2024): Awarded ₹1,00,000 for KALPA, an agricultural AI system.",
];
