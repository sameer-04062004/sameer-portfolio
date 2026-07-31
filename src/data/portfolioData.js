// ============================================================
// portfolioData.js — Centralized configuration for Muhammad Sameer's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Muhammad Sameer Akram Mughal",
  firstName: "Sameer",
  brandName: "Sameer",
  title: "AI & Machine Learning Engineer",
  location: "Sialkot, Pakistan",
  phone: "+92 310 7123194",
  emails: {
    primary: "sameermughal109joe@gmail.com",
    secondary: "sameermughal109joe@gmail.com",
  },
  summary:
    "Artificial Intelligence graduate with hands-on experience building machine learning and deep learning solutions through academic projects — from speech- and multi-modal depression screening systems to safety-aware RAG chatbots. Skilled in Python, TensorFlow, PyTorch, Scikit-learn, OpenCV, and SQL.",
  resumeUrl: "/Muhammad_Sameer_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/sameer-04062004",
  linkedin: "https://www.linkedin.com/in/sameer-akram-mughal-995b8a21a/",
  instagram: "https://www.instagram.com/sameer_mughal_46/",
  facebook: "https://www.facebook.com/sameer.akram.mughal",
};

export const heroContent = {
  greeting: "Hi, I'm Sameer",
  titleHighlight: "AI & Machine Learning Engineer",
  subtitle:
    "I build deep learning systems for speech, vision, and language — from mental-health screening models to safety-aware AI chatbots.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sameermughal109joe@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sameer,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Muhammad_Sameer_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Muhammad Sameer</span>, an aspiring AI/ML Engineer based in Sialkot, Pakistan, dedicated to building deep learning systems that turn research into real, working solutions.`,
  techStack: ["Python", "TensorFlow", "PyTorch"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn research ideas into working AI systems",
  description:
    "I follow a structured, research-driven approach to turn ideas into robust, real-world machine learning solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by studying the problem space, relevant papers, and datasets to lay a solid foundation for the model.",
    },
    {
      number: "02",
      title: "Design",
      text: "Engineering features and architectures — from acoustic features to multi-modal pipelines — suited to the problem.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building and training models with TensorFlow, PyTorch, and Scikit-learn, iterating on performance and robustness.",
    },
    {
      number: "04",
      title: "Evaluate",
      text: "Rigorous benchmarking and evaluation against real-world data, with safety-aware design where it matters.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 80 },
        { name: "C++", level: 75 },
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Keras", level: 85 },
        { name: "Scikit-learn", level: 85 },
      ]
    },
    {
      title: "Computer Vision & Audio",
      skills: [
        { name: "OpenCV", level: 82 },
        { name: "Librosa (Audio Feature Engineering)", level: 80 },
      ]
    },
    {
      title: "Data & Tools",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Git & GitHub", level: 85 },
        { name: "Google Colab", level: 88 },
        { name: "Jupyter Notebook", level: 88 },
      ]
    },
    {
      title: "Applied AI",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", level: 78 },
        { name: "Deep Learning (LSTM/CNN architectures)", level: 85 },
      ]
    },
  ]
};

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex ML problems into clean, testable pipelines." },
  { name: "Teamwork", icon: "🤝", desc: "Collaborating closely with teammates across final year and academic projects." },
  { name: "Time Management", icon: "⏰", desc: "Balancing coursework, research, and multi-stage project deadlines." },
  { name: "Continuous Learning", icon: "📚", desc: "Constantly picking up new tools, frameworks, and techniques in AI/ML." },
];

export const projects = [
  {
    id: "fyp1-ser-depression",
    number: "01",
    badge: "🚀 Final Year Project",
    title: "Sequential Deep Learning Models for Emotion-Based Depression Detection",
    description:
      "A two-stage speech emotion recognition (SER) and depression-inference pipeline using LSTM, BiLSTM, 1D-CNN, and a CNN-LSTM hybrid, trained on the CREMA-D speech emotion database. Engineered acoustic features (13 MFCCs, ZCR, RMS energy) with audio preprocessing and augmentation (noise addition, time-stretching, time-shifting) to improve model robustness. The best-performing C-LSTM model delivered strong results on binary depression-tendency inference.",
    techTags: ["Python", "TensorFlow", "Keras", "Librosa", "Scikit-learn", "LSTM", "CNN"],
    links: {
      github: "https://github.com/sameer-04062004",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "tridep",
    number: "02",
    badge: "Final Year Project II",
    title: "TriDep — Multi-Modal Depression Screening",
    description:
      "An extension of FYP-I into a multi-modal depression screening system, integrating text, audio, and facial features through deep learning models combined into a unified pipeline — improving robustness of mental-health risk detection over single-modality approaches.",
    techTags: ["Python", "Deep Learning", "Multi-Modal", "TensorFlow", "OpenCV"],
    links: {
      github: "https://github.com/sameer-04062004",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "mindbridge-rag",
    number: "03",
    badge: null,
    title: "MindBridge-RAG",
    description:
      "A safety-aware Retrieval-Augmented Generation (RAG) chatbot built to support students facing exam stress, with safety guardrails designed to ensure appropriate, context-aware responses for sensitive student wellbeing queries.",
    techTags: ["Python", "RAG", "LLM", "Safety Guardrails"],
    links: {
      github: "https://github.com/sameer-04062004",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "denoising-autoencoder",
    number: "04",
    badge: null,
    title: "Denoising Autoencoder",
    description:
      "A deep learning autoencoder built with TensorFlow/Keras to remove noise from MNIST and Fashion-MNIST image datasets, with reconstruction quality evaluated to benchmark performance across varying noise levels.",
    techTags: ["TensorFlow", "Keras", "Autoencoders", "Computer Vision"],
    links: {
      github: "https://github.com/sameer-04062004",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "course-registration-db",
    number: "05",
    badge: null,
    title: "Course Registration Database",
    description:
      "A normalized SQL database schema designed for course registration and student management, with tables structured to support efficient querying, data integrity, and scalability.",
    techTags: ["SQL", "Database Design"],
    links: {
      github: "https://github.com/sameer-04062004",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "CS50P: Introduction to Programming with Python",
      issuer: "Harvard University (2026)",
      icon: "🐍",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google (In Progress)",
      icon: "📊",
    },
    {
      name: "The AI Filmmaking Pipeline Certificate",
      issuer: "Higgsfield Academy (July 2026)",
      icon: "🎬",
    },
    {
      name: "Dean's Merit Award",
      issuer: "UMT Sialkot",
      icon: "🏅",
    },
    {
      name: "Gold Medalist",
      issuer: "Govt. Murray College",
      icon: "🥇",
    },
    {
      name: "PEEF & Rehmat-ul-Alameen Scholarships",
      issuer: "Merit-based Scholarships",
      icon: "🎓",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "BS Artificial Intelligence",
  institution: "University of Management and Technology (UMT), Sialkot",
  cgpa: "3.50/4.00",
  graduation: "Completed July 2026 (final result awaited)",
  twelfth: "Govt. Murray College, Sialkot — Intermediate (A+)",
  tenth: "Govt. Pilot Higher Secondary School, Sialkot — Matriculation (A+)",
};

export const footerContent = {
  taglines: [
    "AI & Machine Learning Engineer",
    "Python · TensorFlow · PyTorch",
    "Deep Learning Applications",
  ],
  credential: "BS Artificial Intelligence · UMT Sialkot",
  copyright: `© ${new Date().getFullYear()} Muhammad Sameer Akram Mughal | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
