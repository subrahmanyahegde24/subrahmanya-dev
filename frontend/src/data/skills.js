export const skillCategories = [
  {
    id: "aiml",
    label: "AI / LLM",
    skills: [
      { name: "LangChain", level: 85, orbit: "core" },
      { name: "LangGraph", level: 75, orbit: "core" },
      { name: "Google ADK", level: 80, orbit: "core" },
      { name: "RAG", level: 88, orbit: "core" },
    ],
  },
  {
    id: "edge",
    label: "Edge LLMs",
    skills: [
      { name: "Gemini", level: 82, orbit: "core" },
      { name: "Gemma", level: 82, orbit: "core" },
      { name: "Qwen", level: 70, orbit: "secondary" },
      { name: "Ollama", level: 82, orbit: "core" },
      { name: "Hailo-8L", level: 70, orbit: "emerging" },
    ],
  },
  {
    id: "mlvision",
    label: "ML & Vision",
    skills: [
      { name: "TensorFlow", level: 70, orbit: "secondary" },
      { name: "Scikit-Learn", level: 75, orbit: "secondary" },
      { name: "OpenCV", level: 80, orbit: "core" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", level: 90, orbit: "core" },
      { name: "JavaScript", level: 72, orbit: "secondary" },
      { name: "SQL", level: 75, orbit: "secondary" },
      { name: "Java", level: 65, orbit: "secondary" },
      { name: "C", level: 60, orbit: "secondary" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "FastAPI", level: 85, orbit: "core" },
      { name: "REST APIs", level: 85, orbit: "core" },
      { name: "Pydantic", level: 80, orbit: "core" },
      { name: "Microservices", level: 80, orbit: "core" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MongoDB", level: 85, orbit: "core" },
      { name: "PostgreSQL", level: 72, orbit: "secondary" },
      { name: "MySQL", level: 75, orbit: "secondary" },
      { name: "Qdrant", level: 82, orbit: "core" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      { name: "GCP Cloud Run", level: 82, orbit: "core" },
      { name: "Artifact Registry", level: 75, orbit: "secondary" },
      { name: "Docker", level: 80, orbit: "core" },
      { name: "GitHub Actions", level: 80, orbit: "core" },
      { name: "CI/CD", level: 80, orbit: "core" },
      { name: "Vercel", level: 72, orbit: "secondary" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", level: 85, orbit: "core" },
      { name: "GitHub", level: 85, orbit: "core" },
      { name: "Tailscale", level: 70, orbit: "emerging" },
    ],
  },
];

export const techRadar = [
  { name: "Multi-Agent Systems (Google ADK)", quadrant: "adopt" },
  { name: "Agentic RAG (LangChain)", quadrant: "adopt" },
  { name: "Quantised Local LLMs (Ollama)", quadrant: "adopt" },
  { name: "FastAPI Microservices on GCP", quadrant: "adopt" },
  { name: "Qdrant / Hybrid Search", quadrant: "adopt" },
  { name: "LangGraph", quadrant: "trial" },
  { name: "Edge Accelerators (Hailo-8L)", quadrant: "trial" },
  { name: "Recommendation Systems", quadrant: "trial" },
  { name: "Knowledge Graphs", quadrant: "trial" },
  { name: "Kubernetes", quadrant: "assess" },
  { name: "MLOps / Model Registry", quadrant: "assess" },
  { name: "Terraform / IaC", quadrant: "hold" },
];
