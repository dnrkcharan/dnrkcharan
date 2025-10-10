export const profile = {
  name: "Dasari Narada Rama Krishna Charan",
  nickname: "Charan",
  location: "Hyderabad, India",
  tagline: "Software Engineer • AI-driven platforms",
  summary:
    "AI-native engineer who architects delightful intelligence for finance. I blend quant research, machine learning and product thinking to turn messy datasets into cinematic experiences for analysts and executives.",
  resumeUrl: "/assets/charan-resume.pdf",
  photo: {
    src: "/assets/charan-headshot.svg",
    alt: "Stylised portrait of Dasari Narada Rama Krishna Charan in a blazer",
    caption: "AI-first engineer turning data into decisive stories"
  },
  focusAreas: ["AI/ML", "Full-stack", "Data Science"],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/dnrk-charan" },
    { label: "GitHub", href: "https://github.com/dnrkcharan" },
    { label: "Email", href: "mailto:dnrkcharan@gmail.com" }
  ],
  heroHighlights: [
    {
      title: "3+ years",
      description: "Designing AI-first systems for research desks & trading ops",
      accent: "Experience"
    },
    {
      title: "200M+ datapoints",
      description: "Pipelines orchestrated across equities, derivatives & crypto",
      accent: "Data"
    },
    {
      title: "5x efficiency",
      description: "Automation boosts across IPO analytics & logistics intelligence",
      accent: "Impact"
    }
  ],
  aboutIntro:
    "I craft AI experiences that feel more like co-pilots than dashboards — weaving financial data, automation and narrative design together.",
  aboutStory:
    "From IPO prediction models to crypto intelligence and EV charging optimisers, I obsess over compressing complex analysis into playful, insight-rich surfaces. Pairing FastAPI, TypeScript and graph analytics with a storyteller's heart lets me translate noisy data into crisp, actionable adventures.",
  aboutCuriosity:
    "Powered by filter coffee, neo-jazz playlists and a curiosity for how humans collaborate with machines.",
  aboutHighlights: [
    {
      title: "Narrative-first engineer",
      description:
        "Stitch data, design and ML together so decision makers feel like they're using a sci-fi console."
    },
    {
      title: "Financial systems whisperer",
      description:
        "Architect research platforms that fuse quant screens, P&L analytics and auto-reporting into one seamless loop."
    },
    {
      title: "Automation artist",
      description:
        "Dream up bots, Excel add-ins and workflows that free teams from repetitive toil and spark creative analysis."
    }
  ],
  aboutStats: [
    {
      value: "3+",
      label: "Years shipping AI experiences",
      subtext: "Finance, logistics, energy & analytics"
    },
    {
      value: "200M+",
      label: "Data points orchestrated",
      subtext: "Across equities, derivatives & freight"
    },
    {
      value: "10+",
      label: "Production ML pipelines",
      subtext: "Forecasting, NLP, anomaly detection"
    }
  ],
  experiences: [
    {
      company: "Golden Hills Capital",
      role: "Software Engineer",
      period: "Oct 2023 – Present",
      location: "Hyderabad, India",
      logo: "/assets/logos/golden-hills-logo.svg",
      logoAlt: "Golden Hills Capital logo",
      site: "https://goldenhills.in",
      achievements: [
        "Lead engineer on MIDAS – Next-gen equity IPO, Follow-on, and research platform integrating ML models, dashboards, and risk analysis.",
        "Built & deployed Crypto Insights Platform (screeners, news aggregation, portfolio tools) securely on IIS servers.",
        "Developed advanced screeners, portfolio dashboards, and Excel add-ins for CMG DataLab GraphQL API.",
        "Enhanced query-builder, reducing response time and improving analyst efficiency."
      ],
      tech: ["FastAPI", "React", "GraphQL", "PostgreSQL", "Azure", "Docker"]
    },
    {
      company: "Cogoport",
      role: "Software Development Engineer I",
      period: "May 2022 – Sep 2023",
      location: "Mumbai, India",
      logo: "/assets/logos/cogoport-logo.svg",
      logoAlt: "Cogoport logo",
      site: "https://www.cogoport.com",
      achievements: [
        "Spearheaded ML-based freight data automation, improving classification accuracy to 95% and saving 30+ analyst hours/week.",
        "Automated ingestion of 1M+ datapoints via Selenium & cron.",
        "Integrated Outlook API for automated email parsing, reducing workload by 60%.",
        "Improved backend services and admin dashboard for shipment communications."
      ],
      tech: ["Python", "Django", "Selenium", "PostgreSQL", "Azure Functions"]
    }
  ],
  projects: [
    {
      title: "IPO/FO Return Prediction",
      year: "2023",
      description:
        "Built ensemble ML models predicting T+1, T+7, and T+30 IPO/FO returns using sector momentum, macro indicators, and market depth across 200+ deals.",
      impact: "Insights deployed inside MIDAS dashboards for advisor-driven analytics.",
      tags: ["Time Series", "Finance", "Ensemble Models"],
      links: []
    },
    {
      title: "Crypto Insights Platform",
      year: "2023",
      description:
        "Designed FastAPI, React, and Redis-based analytics platform covering screeners, watchlists, portfolio analytics, and technical indicators.",
      impact: "Automated exchange and on-chain data ingestion with Excel add-ins and IIS deployment supporting 1K+ research queries.",
      tags: ["FastAPI", "React", "Redis", "Automation"],
      links: []
    },
    {
      title: "Email Classification System",
      year: "2022",
      description:
        "Developed FastAPI and Outlook automation pipeline sorting 100K+ shipment emails into actionable queues.",
      impact: "Applied NLP for intent detection reducing manual effort by 60%.",
      tags: ["NLP", "Automation", "FastAPI"],
      links: []
    },
    {
      title: "EV Smart Scheduling",
      year: "2022",
      description:
        "Built deep learning-based load forecasting model with dynamic pricing for EV charging stations.",
      impact: "Implemented optimization algorithm coordinating scheduling under dynamic pricing.",
      tags: ["Deep Learning", "Energy", "Optimization"],
      links: []
    }
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "FastAPI", level: 90 },
        { name: "React", level: 88 },
        { name: "Django", level: 82 },
        { name: "Odoo", level: 70 }
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Pandas", level: 92 },
        { name: "scikit-learn", level: 86 },
        { name: "NLP", level: 80 },
        { name: "Forecasting", level: 88 }
      ]
    },
    {
      category: "Automation & DevOps",
      items: [
        { name: "Azure", level: 85 },
        { name: "Docker", level: 82 },
        { name: "Power BI", level: 80 },
        { name: "Git", level: 78 }
      ]
    }
  ],
  education: [
    {
      school: "Scaler",
      program: "Data Science & Machine Learning Program",
      period: "2024 – Present",
      details: "Advanced curriculum covering Python, EDA, ML/DL, NLP, RAG, LLM Ops and deployment.",
      logo: "/assets/logos/scaler-logo.svg",
      logoAlt: "Scaler logo"
    },
    {
      school: "National Institute of Technology, Andhra Pradesh",
      program: "B.Tech • Electrical & Electronics Engineering",
      period: "2018 – 2022",
      details: "CGPA 7.09/10 • MathQuest 2019 Runner-up",
      logo: "/assets/logos/nitap-logo.svg",
      logoAlt: "NIT Andhra Pradesh logo"
    }
  ],
  certifications: [
    {
      title: "Machine Learning with Python",
      issuer: "IBM / Coursera",
      description: "Feature engineering, supervised learning and deployment of real-world ML pipelines.",
      link: "https://coursera.org",
      image: "https://image.pollinations.ai/prompt/Futuristic%20certificate%20for%20Machine%20Learning%20with%20Python%20with%20neon%20data%20visualisations"
    },
    {
      title: "Python for Everybody Specialisation",
      issuer: "University of Michigan",
      description: "Data structures, web access, databases and capstone project for full-stack Python.",
      link: "https://coursera.org",
      image: "https://image.pollinations.ai/prompt/Cyberpunk%20style%20certificate%20for%20Python%20programming%20with%20code%20streams"
    },
    {
      title: "Machine Learning with Python",
      issuer: "YHills",
      description: "Hands-on ML lab building regression, classification and clustering projects.",
      link: "https://yhills.com",
      image: "https://image.pollinations.ai/prompt/AI%20generated%20certificate%20for%20machine%20learning%20bootcamp%20with%20geometric%20neural%20networks"
    },
    {
      title: "Introduction to HTML5",
      issuer: "Coursera",
      description: "Crafted responsive UI foundations with semantic HTML and accessibility best practices.",
      link: "https://coursera.org",
      image: "https://image.pollinations.ai/prompt/Futuristic%20certificate%20for%20modern%20web%20design%20with%20glowing%20HTML%20icons"
    }
  ],
  achievements: [
    {
      title: "HackerRank Gold Badges",
      description: "Achieved gold-tier problem solving in Python and SQL, ranking amongst top global programmers.",
      image: "https://image.pollinations.ai/prompt/Golden%20digital%20badge%20for%20coding%20champion%20with%20Python%20and%20SQL%20symbols",
      link: "https://www.hackerrank.com/profile/dnrkcharan"
    },
    {
      title: "Math Quest 2019 – Runner-up",
      description: "Secured 2nd place in a national-level quantitative analytics challenge solving dynamic optimisation puzzles.",
      image: "https://image.pollinations.ai/prompt/Futuristic%20trophy%20for%20mathematics%20competition%20with%20glowing%20equations",
      link: "https://nitandhra.ac.in"
    }
  ],
  contact: {
    email: "dnrkcharan@gmail.com",
    phone: "+91 93939 36118",
    calendar: "https://cal.com",
    github: "https://github.com/dnrkcharan"
  }
};

export type Profile = typeof profile;
