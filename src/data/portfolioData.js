// Source of Truth:
// Notion: https://deep-govindvira.notion.site/Deep-Govindvira-54aa527b55e782b28f3301c9ca9930da
// GitHub: https://github.com/deep-govindvira
// LinkedIn: https://www.linkedin.com/in/deep-govindvira/

export const portfolioData = {
  personal: {
    name: "Deep Govindvira",
    greetings: "Hi, I'm",
    title: "Software Developer",
    badge: "Software Developer @ Zeus Learning",
    location: "Mumbai / Nadiad, India",
    email: "deep.govindvira@gmail.com",
    shortBio:
      "I’m a Software Engineer who looks beyond just getting code to work. I focus on understanding requirements, making thoughtful technical decisions, and taking ownership of backend, API design, and full-stack solutions built for reliability and maintainability.",
    about: [
      "I’m a Software Engineer who looks beyond just getting code to work. I focus on understanding the problem, finding the right solution, and thinking through how it will perform and hold up in the long run. I focus on understanding requirements, making thoughtful technical decisions, and taking ownership of the solutions I build, from implementation to reliability and maintainability. I value writing good software, learning from challenges, and taking responsibility for what I build.",
      "My experience spans backend development, API design, and full-stack application development, with a focus on building reliable and maintainable software.",
      "I’ve worked on building REST APIs, optimizing data access with Redis, processing asynchronous tasks with RabbitMQ, and developing document processing workflows involving data extraction, verification, and real-time updates.",
      "I aim to contribute to meaningful engineering work, solve challenging problems, and build software that stands up to real-world needs.",
    ],
    social: {
      github: "https://github.com/deep-govindvira",
      linkedin: "https://www.linkedin.com/in/deep-govindvira/",
      leetcode: "https://leetcode.com/u/deep_govindvira/",
      codechef: "https://www.codechef.com/users/deepgovindvira",
      codeforces: "https://codeforces.com/profile/deep_govindvira",
      email: "mailto:deep.govindvira@gmail.com",
    },
    resumeUrl: "https://drive.google.com/file/d/1bwZ1xEaV3SKOCXXKhvpeBtNf-xI-dQxz/view",
  },

  // 100% Verified Metrics from Notion, University, and Work Experience
  stats: [
    { label: "Performance", value: "83% Faster", subtext: "API Optimization (66s → 11.27s)" },
    { label: "Academics", value: "7.72 CPI", subtext: "B.Tech IT @ DDU" },
    { label: "Research", value: "83% Accuracy", subtext: "ICETCI 2026 Paper Id - 183" },
    { label: "Academic Rank", value: "Rank 1276", subtext: "12th Board Science (10th: 92.5%)" },
  ],

  // Coding Profiles directly from Notion
  codingProfiles: [
    {
      name: "LeetCode",
      handle: "deep_govindvira",
      url: "https://leetcode.com/u/deep_govindvira/",
      icon: "LeetCode",
      description: "Algorithmic problem solving across DSA topics",
    },
    {
      name: "CodeChef",
      handle: "deepgovindvira",
      url: "https://www.codechef.com/users/deepgovindvira",
      icon: "CodeChef",
      description: "Competitive programming contests & division rounds",
    },
    {
      name: "Codeforces",
      handle: "deep_govindvira",
      url: "https://codeforces.com/profile/deep_govindvira",
      icon: "Codeforces",
      description: "Speed & mathematical algorithmic challenges",
    },
    {
      name: "HackerRank",
      handle: "Binary Beast",
      url: "https://www.hackerrank.com/contests/binary-beast/challenges",
      icon: "Trophy",
      description: "Contest Organizer & problem statement designer",
    },
    {
      name: "GitHub",
      handle: "deep-govindvira",
      url: "https://github.com/deep-govindvira",
      icon: "GitHub",
      description: "17 repositories including Marksheet System & Account Management",
    },
  ],

  // Exactly the 21 skills listed in Notion under "🚀 Skills"
  skillCategories: [
    {
      category: "Programming Languages",
      shortLabel: "Languages",
      icon: "Code",
      theme: "blue",
      badgeGradient: "from-blue-500 to-indigo-600",
      accentBorder: "border-blue-500/30",
      accentBg: "bg-blue-500/10",
      accentText: "text-blue-400",
      description: "Core languages listed on Notion",
      skills: [
        { name: "C", tag: "Procedural" },
        { name: "C++", tag: "OOP & Systems" },
        { name: "Java", tag: "Backend Core" },
        { name: "C#", tag: ".NET Core" },
        { name: "Python", tag: "ML & OCR" },
        { name: "JavaScript", tag: "Web & UI" },
      ],
    },
    {
      category: "Frameworks & Web",
      shortLabel: "Frameworks & Web",
      icon: "Server",
      theme: "emerald",
      badgeGradient: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-500/30",
      accentBg: "bg-emerald-500/10",
      accentText: "text-emerald-400",
      description: "Frontend & backend frameworks listed on Notion",
      skills: [
        { name: "Spring Boot", tag: "Java Backend" },
        { name: ".NET", tag: "C# Backend" },
        { name: "React.js", tag: "SPA Frontend" },
        { name: "Angular", tag: "v7 to v22 Upgrade" },
      ],
    },
    {
      category: "Databases & Messaging",
      shortLabel: "Databases & Messaging",
      icon: "Database",
      theme: "purple",
      badgeGradient: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-500/30",
      accentBg: "bg-purple-500/10",
      accentText: "text-purple-400",
      description: "Relational, NoSQL, and message broker systems from Notion",
      skills: [
        { name: "MySQL", tag: "Relational DB" },
        { name: "PostgreSQL", tag: "Relational DB" },
        { name: "DynamoDB", tag: "AWS NoSQL" },
        { name: "Kafka", tag: "Event Streaming" },
      ],
    },
    {
      category: "Cloud, DevOps & Tooling",
      shortLabel: "Cloud & Tools",
      icon: "Wrench",
      theme: "amber",
      badgeGradient: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-500/30",
      accentBg: "bg-amber-500/10",
      accentText: "text-amber-400",
      description: "Cloud infrastructure, containers & developer tools from Notion",
      skills: [
        { name: "AWS", tag: "Cloud Computing" },
        { name: "Docker", tag: "Containerization" },
        { name: "Kubernetes", tag: "Orchestration" },
        { name: "Git", tag: "Version Control" },
        { name: "GitHub", tag: "Collaboration" },
        { name: "Postman", tag: "API Testing" },
        { name: "Claude Skill", tag: "AI Tooling" },
      ],
    },
  ],

  // Exactly the 3 Experiences listed on Notion under "💼 Experience"
  experience: [
    {
      role: "Software Developer",
      organization: "Zeus Learning",
      duration: "June 2026 | Mumbai, India",
      location: "Mumbai, India",
      type: "Full-Time",
      logo: "zeus.png",
      url: "https://zeuslearning.com/",
      featured: true,
      points: [
        "Optimised the Get Institution Details API by eliminating unnecessary user data retrieval while preserving institution-specific filtering and count requirements, reducing response time from 66 seconds to 11.27 seconds (approximately 83% improvement).",
        "Upgraded Angular from version 7 to version 22, resolved UI regressions caused by the upgrade, and subsequently revamped the UI to deliver a redesigned user experience.",
        "Enabled safe deletion of resources such as assessments, courses, and eBooks across multiple applications through the central Passport application by developing APIs and stored procedures to validate student and teacher associations.",
        "Built a Trainee Management REST API using ASP.NET Core and MySQL with Redis caching to reduce database queries and improve response times, and RabbitMQ for reliable asynchronous file submission processing to enhance scalability and handle concurrent requests efficiently.",
      ],
      technologies: ["ASP.NET Core", "MySQL", "Redis", "RabbitMQ", "Angular", "Stored Procedures", "REST APIs"],
    },
    {
      role: "Internship — Marksheet Management System",
      organization: "Dharmsinh Desai University",
      duration: "December 2025 - March 2026 | Nadiad, India",
      location: "Nadiad, India",
      type: "Internship",
      logo: "ddu.png",
      url: "https://www.ddu.ac.in/",
      github: "https://github.com/deep-govindvira/Marksheet-Management-System",
      featured: false,
      points: [
        "Worked on project “Marksheet Management System”.",
        "Implemented an automated system for processing and structuring marksheet data from documents, improving accuracy and reducing manual effort.",
        "Python, OCR (pytesseract), LLM, Java, Spring Boot, React.js, Server-Sent Events, Role-based access control, Excel export.",
      ],
      technologies: ["Python", "OCR (pytesseract)", "LLM", "Java", "Spring Boot", "React.js", "Server-Sent Events", "Excel Export"],
    },
    {
      role: "Core Committee Member",
      organization: "Decrypters Coding Club",
      duration: "December 2023 - December 2024 | Nadiad, India",
      location: "Nadiad, India",
      type: "Leadership",
      logo: "decrypters.jpeg",
      url: "https://www.hackerrank.com/contests/binary-beast/challenges",
      featured: false,
      points: [
        "Successfully organized the Binary Beast Contest on the HackerRank platform, managing logistics and ensuring a seamless participant experience.",
        "Helped fellow core committee members in designing and developing problem statements for the Binary Beast Contest.",
        "Organized a Google Meet session to introduce and explain the fundamentals of Data Structures and Algorithms (DSA), promoting learning and interaction.",
      ],
      technologies: ["Data Structures & Algorithms", "HackerRank", "Problem Framing", "Event Management", "Mentorship"],
    },
  ],

  // Exactly the projects from Notion 🎯 Projects + verified Marksheet Management System
  projects: [
    {
      id: "deep-fake-detection",
      title: "Deep Fake Image Detection",
      category: "AI & ML",
      featured: true,
      description:
        "A system using an ensemble of InceptionV3, MobileNetV2, ResNet-50 achieving 83% accuracy, after benchmarking traditional ML models and VGG19 with lower performance.",
      highlights: [
        "Ensemble architecture achieving 83% accuracy across benchmarks",
        "Tested against traditional machine learning models and VGG19",
        "Presented as research paper at ICETCI 2026 (Paper Id - 183)",
      ],
      technologies: ["Python", "TensorFlow/Keras", "NumPy", "Scikit-learn", "Pandas", "Kaggle"],
      kaggle: "https://www.kaggle.com/yashgokulgandhi6/code",
      paperUrl: "https://drive.google.com/file/d/1SUni2eIsSOf4wdi1ihLXgkVOIayancDV/view",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
    },
    {
      id: "marksheet-management",
      title: "Marksheet Management System",
      category: "Full Stack",
      featured: true,
      description:
        "An automated system for processing and structuring marksheet data from documents, improving accuracy and reducing manual effort.",
      highlights: [
        "Automated extraction using Python OCR (pytesseract) and LLM verification",
        "Real-time processing updates via Server-Sent Events (SSE)",
        "Role-based access control (RBAC) and structured Excel export",
      ],
      technologies: ["Python", "OCR (pytesseract)", "LLM", "Java", "Spring Boot", "React.js", "Server-Sent Events", "Excel export"],
      github: "https://github.com/deep-govindvira/Marksheet-Management-System",
      gradient: "from-teal-600 via-cyan-600 to-blue-600",
    },
    {
      id: "account-management",
      title: "Account Management",
      category: "Backend",
      featured: true,
      description:
        "A secure backend system with RESTful APIs supporting account operations and fund transfers, leveraging JWT authentication, Spring Security, and OOP/SOLID principles.",
      highlights: [
        "RESTful APIs supporting secure account operations and fund transfers",
        "Stateless security authentication using JWT and Spring Security",
        "Designed following Object-Oriented Programming and SOLID principles",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Security", "JWT"],
      github: "https://github.com/deep-govindvira/account-management-system",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      id: "keep-fast",
      title: "Note Application (Keep Fast)",
      category: "Frontend",
      featured: false,
      description:
        "A Google Keep alternative enabling Markdown-based note creation with real-time rendering into visually distinct, color-coded notes for improved organization and readability.",
      highlights: [
        "Markdown note creation with real-time rendering into color-coded cards",
        "Persistent cloud synchronization with Firebase",
        "Live web application deployed on Netlify",
      ],
      technologies: ["HTML", "Bootstrap", "JavaScript", "Firebase", "Markdown"],
      github: "https://github.com/deep-govindvira/keepfast",
      demo: "https://keepfast.netlify.app/",
      gradient: "from-amber-500 via-orange-500 to-yellow-500",
    },
    {
      id: "all-tasker",
      title: "Task Management (All_Tasker)",
      category: "Full Stack",
      featured: false,
      description:
        "A multi-feature productivity application integrating a To-Do list, notes, expense tracker, chat, drawing tool, and code editor.",
      highlights: [
        "Integrated suite: To-Do list, notes, and expense tracking",
        "Interactive real-time chat, canvas drawing tool, and code editor",
        "Cloud data storage with DynamoDB and Firebase",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "DynamoDB", "Firebase"],
      github: "https://github.com/deep-govindvira/All_Tasker",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
    },
    {
      id: "console-games",
      title: "Console Games",
      category: "Systems",
      featured: false,
      description:
        "A collection of C/C++ console games where the user only needs to press Enter, showcasing automated gameplay. (February’23)",
      highlights: [
        "Console game implementations in C and C++ (IPL, FIFA, GOLD, RACE, SPS)",
        "Automated simulation gameplay mechanics requiring only Enter key press",
        "Terminal state management and algorithmic decision loops",
      ],
      technologies: ["C", "C++", "Console Architecture"],
      github: "https://github.com/deep-govindvira/console-games",
      gradient: "from-slate-600 via-gray-700 to-zinc-800",
    },
  ],

  // Exactly the Education entries from Notion
  education: [
    {
      degree: "B.Tech, Information Technology",
      field: "Information Technology",
      institution: "Dharmsinh Desai University",
      location: "Nadiad, India",
      period: "July 2022 - May 2026",
      website: "https://www.ddu.ac.in/",
      logo: "ddu.png",
      score: "CPI : 7.72 / 10",
      highlights: [
        "Dharmsinh Desai University (DDU), Faculty of Technology.",
        "Completed internship project on Marksheet Management System.",
      ],
    },
    {
      degree: "Science",
      field: "Science Stream",
      institution: "Sharda Mandir Vidyalaya",
      location: "Nadiad, India",
      period: "June 2008 - March 2022",
      website: "https://www.yogividyapeeth.org.in/institutes/sharda-mandir-vidyalaya/",
      score: "12th State Rank - 1276 | 10th: 92.5%",
      highlights: [
        "12th State Rank - 1276.",
        "10th Percentage: 92.5%.",
      ],
    },
  ],

  // Exactly the Certifications from Notion
  certifications: [
    {
      title: "ICETCI 2026 Certificate Paper Id - 183 - Deep Govindvira",
      id: "Paper Id - 183",
      issuer: "IEEE / ICETCI 2026",
      certificateUrl: "https://drive.google.com/file/d/1XI81wsJdk1M9rFcol2qEsaoag9bvpu6J/view",
      paperUrl: "https://drive.google.com/file/d/1SUni2eIsSOf4wdi1ihLXgkVOIayancDV/view",
      description: "Certificate for research paper 'Ensemble-Based Deep Transfer Learning Approach for DeepFake Image Detection' (Paper Id: 183).",
    },
    {
      title: "AWS Academy Graduate — AWS Academy Cloud Foundations",
      id: "AWS Badge",
      issuer: "Amazon Web Services (AWS)",
      certificateUrl: "https://drive.google.com/file/d/1lUaNbnwMB-F9h3cV2Ih-BDSKGGe62deq/view",
      description: "AWS Academy Graduate badge certificate for AWS Academy Cloud Foundations.",
    },
  ],
};
