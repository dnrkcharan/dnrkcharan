export const profile = {
  name: "Dasari Narada Rama Krishna Charan",
  nickname: "Charan",
  location: "Hyderabad, India",
  tagline: "Turning Code into Intelligence",
  summary:
    "Engineer by profession, learner by passion — turning code into intelligence. With 3+ years building enterprise financial platforms, I'm crafting AI-powered systems that merge finance, data and machine learning.",
  resumeUrl: "/assets/charan-resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/dnrk-charan" },
    { label: "GitHub", href: "https://github.com/dnrkcharan" },
    { label: "Email", href: "mailto:dnrkcharan@gmail.com" }
  ],
  experiences: [
    {
      company: "Golden Hills Capital",
      role: "Software Engineer",
      period: "Oct 2023 – Present",
      location: "Hyderabad, India",
      achievements: [
        "Built advanced equity screeners covering 1K+ securities across technical, fundamental and risk parameters, elevating analyst throughput by 40%",
        "Optimized dynamic query builder and caching strategies reducing response latency by 40%",
        "Designed real-time portfolio dashboards, P&L heatmaps and comparative analytics for market intelligence",
        "Delivered crypto insights platform with FastAPI backend, Excel integrations and secure IIS deployment",
        "Created Excel add-in for CMG DataLab GraphQL API enabling research model auto-population",
        "Collaborated with finance teams to productionize ML pipelines and reporting tools"
      ],
      tech: ["FastAPI", "React", "GraphQL", "PostgreSQL", "Azure", "Docker"]
    },
    {
      company: "Cogoport",
      role: "Software Development Engineer I",
      period: "May 2022 – Sep 2023",
      location: "Mumbai, India",
      achievements: [
        "Implemented ML automation for freight data classification hitting 95% accuracy and saving 30+ analyst hours weekly",
        "Automated ingestion of 1M+ shipment datapoints via Selenium pipelines",
        "Integrated Outlook API for email parsing trimming manual workload by 60%",
        "Enhanced backend services and admin dashboards for shipment communications"
      ],
      tech: ["Python", "Django", "Selenium", "PostgreSQL", "Azure Functions"]
    }
  ],
  projects: [
    {
      title: "IPO/FO Return Prediction",
      year: "2025",
      description:
        "Machine learning ensemble predicting T+1, T+7 and T+30 returns using sector momentum, macro indicators and fundamentals across 200+ IPO/FO deals.",
      impact: "Powers AI-driven forecasts directly inside MIDAS.",
      tags: ["Time Series", "Finance AI", "Ensemble Models"],
      links: [{ label: "Case Study", href: "https://linkedin.com/in/dnrk-charan" }]
    },
    {
      title: "Crypto Insights Platform",
      year: "2024",
      description:
        "Full-stack analytics hub with screeners, watchlists, portfolio analytics, technical indicators and Excel add-ins.",
      impact: "Serves 1K+ daily research queries with secure IIS deployment.",
      tags: ["FastAPI", "React", "Redis", "IIS"],
      links: [{ label: "Product Walkthrough", href: "https://github.com/dnrkcharan" }]
    },
    {
      title: "Email Classification System",
      year: "2023",
      description:
        "FastAPI + Outlook automation pipeline sorting 100K+ shipment emails into actionable queues.",
      impact: "Reduced manual operations workload by 60%.",
      tags: ["NLP", "Automation", "FastAPI"],
      links: []
    },
    {
      title: "EV Smart Scheduling",
      year: "2022",
      description:
        "Deep-learning powered load forecasting with GUI-driven EV charging orchestration.",
      impact: "Cut distribution peak-load impact by 18% for pilot utility.",
      tags: ["Deep Learning", "Energy", "Optimization"],
      links: []
    }
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "FastAPI", level: 90 },
        { name: "React", level: 88 },
        { name: "Django", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Pandas", level: 92 },
        { name: "scikit-learn", level: 86 },
        { name: "NLP", level: 80 },
        { name: "Data Analysis", level: 90 }
      ]
    },
    {
      category: "Automation & DevOps",
      items: [
        { name: "Selenium", level: 85 },
        { name: "Docker", level: 82 },
        { name: "CI/CD", level: 78 },
        { name: "IIS", level: 75 }
      ]
    }
  ],
  education: [
    {
      school: "Scaler",
      program: "Data Science & Machine Learning Program",
      period: "2024 – Present",
      details: "Advanced curriculum covering Python, EDA, ML/DL, NLP, RAG, LLM Ops and deployment."
    },
    {
      school: "National Institute of Technology, Andhra Pradesh",
      program: "B.Tech • Electrical & Electronics Engineering",
      period: "2018 – 2022",
      details: "CGPA 7.09/10 • MathQuest 2019 Runner-up"
    }
  ],
  certifications: [
    {
      title: "Machine Learning with Python",
      issuer: "IBM / Coursera"
    },
    {
      title: "Python for Everybody Specialisation",
      issuer: "University of Michigan"
    },
    {
      title: "Machine Learning with Python",
      issuer: "YHills"
    },
    {
      title: "Introduction to HTML5",
      issuer: "Coursera"
    }
  ],
  achievements: [
    "Gold Badge in Python & SQL (HackerRank)",
    "2nd Place – Math Quest 2019"
  ],
  contact: {
    email: "dnrkcharan@gmail.com",
    phone: "+91 93939 36118",
    calendar: "https://cal.com",
    github: "https://github.com/dnrkcharan"
  }
};

export type Profile = typeof profile;
