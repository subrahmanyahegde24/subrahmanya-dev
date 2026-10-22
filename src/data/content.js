export const profile = {
  name: 'Subrahmanya Shivaram Hegde',
  short: 'Subrahmanya',
  role: ['AI Engineer', 'Agentic AI', 'RAG', 'Edge LLMs'],
  intro:
    'I turn ambitious AI ideas into production systems — multi-agent LLM apps, retrieval pipelines, and models tuned to run on the edge.',
  email: 'subrahmanyashegde24@gmail.com',
  location: 'Bengaluru, India',
  github: 'https://github.com/subrahmanyahegde24',
  linkedin: 'https://linkedin.com/in/subrahmanya24',
  resume: '/resume.pdf',
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm <b>Subrahmanya Shivaram Hegde</b>, an Associate AI Engineer at Openecore (formerly Kruthak Technology) with 1+ year of industry experience building production RAG systems, multi-agent LLM applications, and edge AI pipelines.",
    'I work across the full delivery lifecycle — FastAPI microservice backends, quantised local LLMs for low-spec devices, and containerised workloads shipped to GCP through CI/CD. Right now I am building a fully on-premise restaurant ordering platform designed to feed a recommendation engine.',
  ],
  stats: [
    { value: 1, suffix: '+', decimals: 0, label: 'Years in industry' },
    { value: 8.83, suffix: '', decimals: 2, label: 'B.E. CGPA', accent: true },
    { value: 40, prefix: '~', suffix: '%', decimals: 0, label: 'LLM latency cut' },
    { value: 1, prefix: '₹', suffix: 'L', decimals: 0, label: 'Seed funding won', accent: true },
  ],
};

export const projects = [
  {
    kicker: 'Agentic AI / Conversational Commerce',
    title: 'Pallavi Bakery Bot',
    period: 'Apr – May 2026',
    description:
      'A 5-agent Telegram ordering assistant built with Google ADK and Gemini. One orchestrator routes every request to four specialised agents — Menu, Order, Tracking, Admin — through 23 custom tools, automating the full lifecycle from cart to live tracking with Razorpay payments.',
    tags: ['Python', 'Google ADK', 'Gemini', 'FastAPI', 'MongoDB', 'Razorpay', 'Next.js', 'Vercel'],
    metrics: [
      ['Agents', '1 Orchestrator + 4'],
      ['Custom Tools', '23'],
      ['Admin Tools', '7 in-chat'],
      ['Payments', 'Razorpay'],
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/subrahmanyahegde24/pallavi-bakery-bot' },
      { label: 'Live Demo', href: 'https://pallavibakes.subrahmanyadev.com/' },
    ],
  },
  {
    kicker: 'Computer Vision / Desktop AI',
    title: 'Posture Pilot',
    period: 'Aug 2026',
    description:
      'A privacy-first desktop coach that tracks posture from the webcam in real time with MediaPipe 3D pose estimation and speaks natural reminders through the Gemini Live API. Frames never leave the machine; a React + Three.js avatar mirrors your posture and SQLite logs daily history.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Gemini Live', 'React', 'TypeScript', 'Three.js', 'WebSockets', 'SQLite'],
    metrics: [
      ['Pose Model', 'MediaPipe Heavy'],
      ['Posture Checks', 'Head · Spine · Shoulders'],
      ['Privacy', '100% on-device'],
      ['Ships As', 'Windows .exe (CI)'],
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/subrahmanyahegde24/posture-pilot' }],
  },
  {
    kicker: 'RAG / EdTech Platform',
    title: 'LexiGuid',
    period: 'Jul 2025 – May 2026',
    description:
      'An AI educational assistant taken from MVP to Agentic RAG. LangChain hybrid search over ChromaDB and Qdrant, OpenCV visual query analysis, and Gemma quantised via Ollama for offline-first use — served as FastAPI microservices on GCP Cloud Run.',
    tags: ['LangChain', 'Qdrant', 'ChromaDB', 'OpenCV', 'Gemma', 'Ollama', 'FastAPI', 'Cloud Run'],
    metrics: [
      ['Retrieval', 'Hybrid search'],
      ['Latency', '~40% faster'],
      ['Deploys', '45 → 8 min'],
      ['Mode', 'Offline-first'],
    ],
    links: [],
  },
  {
    kicker: 'RAG / Knowledge Graphs',
    title: 'SimplyReview',
    period: 'Feb – May 2025',
    description:
      'An AI literature review assistant that processed 50+ academic papers (~2,000 pages), extracting 1,200+ concepts and mapping 3,500+ relationships into an interactive knowledge graph, with sub-second RAG answers across documents.',
    tags: ['Python', 'LangChain', 'Qdrant', 'RAG', 'Knowledge Graphs'],
    metrics: [
      ['Embeddings', '15K+ in Qdrant'],
      ['Retrieval', '< 1 second'],
      ['Graph', '3,500+ relations'],
      ['Review Time', '~60% saved'],
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/subrahmanyahegde24/SimplyReview' },
      { label: 'Live Demo', href: 'https://simplyreview.subrahmanyadev.com/' },
    ],
  },
  {
    kicker: 'Edge AI / Agritech Vision',
    title: 'COFRO',
    period: 'Jul – Dec 2025',
    description:
      'Coffee ripeness detection at the edge. A Python + OpenCV video-to-frame pipeline that keeps real blur, low-light and motion artifacts so YOLOX generalises in the field, trained on a dataset scaled to ~300K images and deployed on the Hailo-8L accelerator.',
    tags: ['Python', 'OpenCV', 'YOLOX', 'Roboflow', 'Hailo-8L'],
    metrics: [
      ['Annotated', '~30K images'],
      ['Dataset', '~300K augmented'],
      ['Classes', '7 ripeness'],
      ['Target', 'Hailo-8L'],
    ],
    links: [],
  },
  {
    kicker: 'NLP / Data Analytics',
    title: 'Reddit Sentiment Analyzer',
    period: 'May 2025',
    description:
      'Built during the IBM Cognitive Customer Insights program: a Streamlit dashboard that pulls live comments from any subreddit, cleans them, scores sentiment with VADER, and visualises the results with interactive charts and word clouds.',
    tags: ['Python', 'Streamlit', 'PRAW', 'VADER', 'NLTK', 'Pandas', 'Plotly'],
    metrics: [
      ['Engine', 'VADER NLP'],
      ['Capacity', '500 comments / run'],
      ['Exports', 'CSV · JSON · Report'],
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/subrahmanyahegde24/CCI-Watson-AI' },
      // TODO: replace '#' with the real live demo URL
      { label: 'Live Demo', href: '#' },
    ],
  },
];

export const skills = [
  {
    kicker: 'Core Pillar',
    title: 'Agentic AI & LLMs',
    badge: 'Multi-Agent',
    text: 'Orchestrator-and-specialist agent systems with tool calling, built on Google ADK, LangChain and LangGraph.',
    tags: ['Google ADK', 'LangChain', 'LangGraph', 'Gemini', 'Tool Calling'],
    span: 'md:col-span-7',
  },
  {
    kicker: 'Retrieval',
    title: 'RAG Systems',
    badge: '< 1s Retrieval',
    text: 'Hybrid and semantic search pipelines over vector stores and knowledge graphs.',
    tags: ['RAG', 'Qdrant', 'ChromaDB', 'Knowledge Graphs'],
    span: 'md:col-span-5',
  },
  {
    kicker: 'On-Device',
    title: 'Edge AI & Vision',
    badge: '~40% Faster',
    text: 'Quantised local LLMs and vision models running on low-spec hardware and accelerators.',
    tags: ['Gemma', 'Qwen', 'Ollama', 'Hailo-8L', 'OpenCV', 'MediaPipe'],
    span: 'md:col-span-5',
  },
  {
    kicker: 'High Throughput',
    title: 'Backend & Microservices',
    badge: '~30% Latency Cut',
    text: 'Async FastAPI services with clean contracts, split by domain and deployed independently.',
    tags: ['FastAPI', 'Pydantic', 'REST APIs', 'Microservices', 'WebSockets'],
    span: 'md:col-span-7',
  },
  {
    kicker: 'Delivery',
    title: 'Cloud & DevOps',
    badge: '45 → 8 min Deploys',
    text: 'Containerised workloads shipped to GCP with fully automated CI/CD.',
    tags: ['GCP Cloud Run', 'Artifact Registry', 'Docker', 'GitHub Actions', 'Vercel'],
    span: 'md:col-span-6',
  },
  {
    kicker: 'Persistence & Languages',
    title: 'Data & Foundations',
    badge: 'SQL + NoSQL',
    text: 'Operational and vector databases, plus the languages and ML libraries underneath it all.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Python', 'SQL', 'TensorFlow', 'Scikit-Learn'],
    span: 'md:col-span-6',
  },
];

export const timeline = [
  {
    period: 'Jun 2026 — Present',
    title: 'Associate AI Engineer',
    org: 'Openecore Private Limited (formerly Kruthak Technology)',
    text: 'Building a self-hosted restaurant ordering platform on an on-premise server — tablet ordering, a real-time Kitchen Display System, and an admin console — with zero cloud dependency, structuring order data to power a recommendation engine.',
  },
  {
    period: 'Jan 2026 — May 2026',
    title: 'Junior Edge AI Engineer',
    org: 'Kruthak Technology Private Limited',
    text: 'Split a monolith into Auth, Vision and Analytics microservices (~30% faster), engineered Agentic RAG for LexiGuid, cut LLM latency ~40% through quantisation, and took deployments from ~45 to ~8 minutes.',
  },
  {
    period: 'Jul 2025 — Dec 2025',
    title: 'Software Engineering Trainee',
    org: 'Kruthak Technology Private Limited',
    text: 'Built the LexiGuid MVP with Qdrant vector search on Dockerised FastAPI, and the COFRO vision pipeline — ~30K images annotated and scaled to ~300K for the Hailo-8L edge accelerator.',
  },
  {
    period: 'Dec 2021 — Dec 2025',
    title: 'B.E. in AI & Machine Learning',
    org: 'Vivekananda College of Engineering & Technology, Puttur',
    text: 'Graduated with a CGPA of 8.83/10. Coursework in Machine Learning, Artificial Intelligence, Data Structures, Operating Systems, DBMS and Software Engineering.',
  },
];

export const certifications = [
  { name: 'Career Essentials in Generative AI', by: 'Microsoft & LinkedIn', href: 'https://drive.google.com/file/d/1uXfvnQfv_QJpSAOalH6rgGlh4fKMDRkS/view?usp=sharing' },
  { name: 'GitHub Tutorial for Beginners', by: 'Great Learning', href: 'https://drive.google.com/file/d/18gbzYFEe5-c1scwyRonBu0c-DAg2BA5s/view?usp=sharing' },
  { name: 'Cognitive Customer Insights with Watson AI', by: 'IBM & Rooman', href: 'https://drive.google.com/file/d/15HgUzUjRYT3kt0-g29uxTNPAp5zg44Z9/view?usp=sharing' },
];
