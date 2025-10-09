export const profile = {
  name: "Dasari Narada Rama Krishna Charan",
  nickname: "Charan",
  location: "Hyderabad, India",
  tagline: "Full-stack engineer | Applied machine learning",
  summary:
    "Software Engineer with 3+ years of experience in full-stack development and applied machine learning. Proven record of improving operational efficiency and delivering AI-driven insights while collaborating with product, research, and operations teams.",
  resumeUrl: "/assets/charan-resume.pdf",
  photo: {
    src: "/assets/charan-headshot.svg",
    alt: "Stylised portrait of Dasari Narada Rama Krishna Charan in a blazer",
    caption: "Software engineer delivering ML-driven analytics"
  },
  focusAreas: ["Full-stack", "Machine Learning", "Automation"],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/dnrk-charan" },
    { label: "GitHub", href: "https://github.com/dnrkcharan" },
    { label: "Email", href: "mailto:dnrkcharan@gmail.com" }
  ],
  heroHighlights: [
    {
      title: "3+ years",
      description: "Full-stack and machine learning experience",
      accent: "Experience"
    },
    {
      title: "1K+ securities",
      description: "Equity research coverage automated in MIDAS",
      accent: "Coverage"
    },
    {
      title: "95% accuracy",
      description: "ML-powered freight data classification at Cogoport",
      accent: "Impact"
    }
  ],
  aboutIntro:
    "I build production-ready analytics platforms, automation pipelines, and ML models that help teams act on data with confidence.",
  aboutStory:
    "At Golden Hills Capital, I lead MIDAS — a decision analytics system that serves equity and crypto research with dashboards, screeners, and reporting built on FastAPI, Django, React, and SQL.",
  aboutCuriosity:
    "Currently pursuing Scaler's Data Science & Machine Learning Program to sharpen advanced ML, NLP, RAG, and deployment skills.",
  aboutHighlights: [
    {
      title: "Full-stack delivery",
      description:
        "Design, build, and ship features across FastAPI, Django, React, SQL, and Azure."
    },
    {
      title: "ML & analytics",
      description:
        "Develop forecasting, anomaly detection, and classification models with measurable accuracy gains."
    },
    {
      title: "Automation focus",
      description:
        "Reduce manual workload with Excel add-ins, email parsing, and data ingestion pipelines."
    }
  ],
  aboutStats: [
    {
      value: "3+",
      label: "Years in software engineering",
      subtext: "Golden Hills Capital • Cogoport"
    },
    {
      value: "40%",
      label: "Faster analyst turnaround",
      subtext: "Via MIDAS screeners and dashboards"
    },
    {
      value: "95%",
      label: "Classification accuracy",
      subtext: "Freight data automation at Cogoport"
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
        "Designed Equity Insights workflow using Django, React, FastAPI, and SQL, integrating pricing, fundamentals, news, and risk metrics across 1K+ securities.",
        "Developed MIDAS (Machine Intelligence Decision Analytics System) with dynamic dashboards, automation bots, and reporting for equities and crypto research desks.",
        "Built advanced screeners with caching strategies, optimized queries, and technical indicator calculations reducing analyst turnaround by 40%.",
        "Delivered crypto research platform with FastAPI, Celery, GraphQL, and Azure Functions, automating exchange and on-chain data ingestion plus Excel add-ins and IIS deployment.",
        "Implemented CMG DataLab GraphQL Excel add-in enabling research model auto-population and automated refresh routines.",
        "Partnered with finance stakeholders to productionize ML pipelines for forecasting and anomaly detection, improving research accuracy by 30%."
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
        "Automated freight data classification with Python, SQL, and FastAPI achieving 95% accuracy and reducing manual labelling by 30+ hours each week.",
        "Built Selenium-based scraping pipelines ingesting 1M+ shipment datapoints for analytics and reporting.",
        "Integrated Outlook API for automated email parsing, cutting manual triage by 60% for operations teams.",
        "Enhanced backend services and dashboards supporting shipment communication workflows and SLA tracking."
      ],
      tech: ["Python", "Django", "Selenium", "PostgreSQL", "Azure Functions"]
    },
    {
      company: "Cogoport",
      role: "Machine Learning Engineer Intern",
      period: "Sep 2021 – May 2022",
      location: "Mumbai, India",
      logo: "/assets/logos/cogoport-logo.svg",
      logoAlt: "Cogoport logo",
      site: "https://www.cogoport.com",
      achievements: [
        "Designed shipment delay prediction models using Python, scikit-learn, and Power BI, improving forecasting accuracy by 20%.",
        "Created automated data extraction pipelines with BeautifulSoup, Selenium, and Azure Functions.",
        "Developed Power BI dashboards for leadership teams to track KPIs and anomaly alerts."
      ],
      tech: ["Python", "scikit-learn", "Power BI", "Selenium", "Azure Functions"]
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
      description: "Coursera certification covering supervised learning, model evaluation, and deployment basics.",
      link: "https://coursera.org",
      image: "https://image.pollinations.ai/prompt/Futuristic%20certificate%20for%20Machine%20Learning%20with%20Python%20with%20neon%20data%20visualisations"
    },
    {
      title: "Python for Everybody Specialisation",
      issuer: "University of Michigan",
      description: "Coursera specialisation on Python fundamentals, data access, databases, and capstone project.",
      link: "https://coursera.org",
      image: "https://image.pollinations.ai/prompt/Cyberpunk%20style%20certificate%20for%20Python%20programming%20with%20code%20streams"
    },
    {
      title: "Machine Learning with Python",
      issuer: "YHills",
      description: "Hands-on ML program building regression, classification, and clustering projects.",
      link: "https://yhills.com",
      image: "https://image.pollinations.ai/prompt/AI%20generated%20certificate%20for%20machine%20learning%20bootcamp%20with%20geometric%20neural%20networks"
    },
    {
      title: "Introduction to HTML5",
      issuer: "Coursera",
      description: "Course on semantic HTML and responsive design foundations.",
      link: "https://coursera.org",
      image: "https://image.pollinations.ai/prompt/Futuristic%20certificate%20for%20modern%20web%20design%20with%20glowing%20HTML%20icons"
    }
  ],
  achievements: [
    {
      title: "HackerRank Gold Badges",
      description: "Gold badge holder in Python and SQL on HackerRank.",
      image: "https://image.pollinations.ai/prompt/Golden%20digital%20badge%20for%20coding%20champion%20with%20Python%20and%20SQL%20symbols",
      link: "https://www.hackerrank.com/profile/dnrkcharan"
    },
    {
      title: "Math Quest 2019 – Runner-up",
      description: "Secured 2nd place in Math Quest 2019 quantitative competition.",
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
