export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "fullstack" | "api";
  image: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  challenges: string;
  results: string;
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  organizationType: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  certificateAsset?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mohamed Hesham Ismael Ibrahim",
    shortName: "Mohamed Hesham",
    title: "Cross-Platform Mobile Application Developer",
    headline: "Building high-performance, pixel-perfect iOS & Android applications with Flutter, Dart & modern architectures.",
    bio: [
      "I am a passionate Cross-Platform Mobile Application Developer based in Cairo, Egypt, dedicated to crafting fluid, resilient, and visually captivating mobile applications. With a strong academic foundation in Computer Science from Ain Shams University and intensive professional training from the Information Technology Institute (ITI), I bridge clean software engineering with delightful user experiences.",
      "My core expertise centers around Flutter and Dart, implementing state-of-the-art architecture patterns using Riverpod, GoRouter, and Clean Architecture. I integrate scalable REST APIs, Firebase real-time backends, and cloud messaging to deliver production-ready apps that run seamlessly across Android and iOS.",
      "When I'm not designing responsive interfaces or optimizing mobile performance, I enjoy dissecting complex algorithms, exploring backend ecosystems with Node.js and Prisma, and contributing to mobile developer communities."
    ],
    location: "Cairo, Egypt",
    email: "mh28321@gmail.com",
    phone: "+201012981220",
    phoneRaw: "+201012981220",
    whatsappUrl: "https://wa.me/201012981220",
    linkedIn: "https://www.linkedin.com/in/mohamed-hesham-444ab7214",
    github: "https://github.com/MohamedH19",
    avatar: "/assets/Professional-ME.jpg",
    availability: "Available for Full-time Roles & High-Impact Contracts",
    languages: [
      { name: "Arabic", level: "Native Proficiency" },
      { name: "English", level: "Professional Working Proficiency" },
    ],
    stats: [
      { label: "Dedicated Mobile Focus", value: "Flutter & Dart" },
      { label: "Completed Projects", value: "10+" },
      { label: "Academic Standing", value: "Ain Shams CS" },
      { label: "Certified Trainee", value: "ITI Egypt" },
    ],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ain Shams University",
    location: "Cairo, Egypt",
    period: "Graduated",
    description: "Solid theoretical and practical grounding in computing foundations, computational thinking, algorithms, software design patterns, and distributed systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Systems & Design (MySQL, Relational Algebra)",
      "Software Engineering & Agile Methodologies",
      "Operating Systems & Multithreading",
      "Computer Networks & Protocols",
      "Mobile Application Architecture",
    ],
    highlights: [
      "Deep understanding of software architecture, memory management, and efficient data processing.",
      "Hands-on team software engineering capstone and modern agile project delivery.",
    ]
  },

  certification: {
    title: "Professional Training in Flutter Development",
    issuer: "Information Technology Institute (ITI)",
    issuerType: "Ministry of Communications and Information Technology (MCIT), Egypt",
    location: "Cairo, Egypt",
    image: "/assets/ProfessionalTraining-Flutter-ITI-Experince.jpg",
    date: "Completed",
    skillsCovered: [
      "Flutter 3.x Deep Dive",
      "Dart OOP & Concurrency",
      "Riverpod State Management",
      "RESTful API Integration",
      "Firebase Cloud Messaging & Firestore",
      "Clean Architecture & Design Patterns",
      "Git & Collaborative GitHub Workflows",
      "Android Studio & Postman Testing",
    ],
    credentialDescription: "Intensive government-sponsored professional training track covering cross-platform mobile application development with Flutter, modern state management frameworks, secure API integrations, and industry-grade engineering practices."
  },

  skills: [
    {
      id: "mobile-frontend",
      name: "Mobile & Frontend",
      iconName: "Smartphone",
      skills: [
        { name: "Flutter 3.x", level: "Advanced", highlight: true, tag: "Primary" },
        { name: "Dart", level: "Advanced", highlight: true, tag: "Core" },
        { name: "Riverpod", level: "Advanced", highlight: true, tag: "State Mgmt" },
        { name: "GoRouter", level: "Proficient", highlight: true },
        { name: "Responsive UI", level: "Advanced", highlight: true },
        { name: "HTML5 & CSS3", level: "Proficient" },
        { name: "Material 3 / Cupertino", level: "Advanced" },
        { name: "Custom Animations", level: "Proficient" },
      ]
    },
    {
      id: "backend-api",
      name: "Backend & Cloud",
      iconName: "Server",
      skills: [
        { name: "Node.js (18+)", level: "Proficient", highlight: true },
        { name: "Express.js", level: "Proficient" },
        { name: "REST API Design", level: "Advanced", highlight: true },
        { name: "Firebase Firestore", level: "Advanced", highlight: true },
        { name: "Firebase Cloud Messaging", level: "Advanced" },
        { name: "JWT Authentication", level: "Proficient" },
        { name: "Prisma ORM", level: "Proficient" },
        { name: "AWS Basics", level: "Familiar" },
      ]
    },
    {
      id: "languages",
      name: "Programming Languages",
      iconName: "Code2",
      skills: [
        { name: "Dart", level: "Advanced", highlight: true },
        { name: "JavaScript (ES6+)", level: "Proficient" },
        { name: "Python", level: "Proficient" },
        { name: "Java", level: "Proficient" },
        { name: "C++", level: "Proficient" },
        { name: "PHP", level: "Familiar" },
      ]
    },
    {
      id: "databases",
      name: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: "Proficient", highlight: true },
        { name: "Firebase Realtime DB", level: "Advanced" },
        { name: "Hive / SharedPreferences", level: "Advanced", highlight: true },
        { name: "Prisma ORM", level: "Proficient" },
      ]
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Advanced", highlight: true },
        { name: "Android Studio", level: "Advanced", highlight: true },
        { name: "Visual Studio Code", level: "Advanced" },
        { name: "Postman API Client", level: "Advanced" },
        { name: "Winston & Logging", level: "Proficient" },
        { name: "Helmet Security", level: "Proficient" },
        { name: "Agile & Scrum", level: "Proficient" },
      ]
    },
    {
      id: "architecture",
      name: "Architecture & Engineering",
      iconName: "Layers",
      skills: [
        { name: "Clean Architecture", level: "Advanced", highlight: true },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", highlight: true },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "State Management Patterns", level: "Advanced" },
        { name: "Authentication Systems", level: "Advanced" },
        { name: "Performance Optimization", level: "Proficient" },
        { name: "Cross-Platform Optimization", level: "Advanced" },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "wisewallet",
      title: "WiseWallet",
      subtitle: "Personal Finance & Expense Tracking Cross-Platform Mobile Application",
      category: "mobile",
      image: "/assets/WiseWallet-Professional-App-Experience.png",
      description: "WiseWallet is a modern personal finance management application designed to help users organize and track their financial life in one place. The application allows users to monitor income and expenses, categorize transactions, track spending habits, and gain a clearer understanding of their financial activity through an intuitive and user-friendly interface.",
      problem: "Tracking income, expenses, and overall financial activity is frequently tedious and inefficient when information is scattered across disparate notes, bank statements, or complex spreadsheets.",
      solution: "WiseWallet delivers a centralized, clutter-free mobile platform for managing daily financial transactions. Users can record income and expenses in seconds, organize entries into customizable categories, review analytical spending trends, and secure their monetary records in the cloud.",
      role: "Lead Mobile Developer — Architecture, State Management, UI/UX Implementation, API & Firebase Integration.",
      technologies: ["Flutter 3.x", "Dart", "Firebase", "Riverpod", "REST APIs", "Git & GitHub", "Material 3"],
      features: [
        "Real-time expense and income tracking with automated balance computations.",
        "Interactive visual breakdown of spending habits by category.",
        "Riverpod reactive state management for zero-lag UI updates and clean separation of concerns.",
        "Firebase authentication and cloud persistence with offline-first synchronization.",
        "Custom category tagging, search, and dynamic date-range filtering.",
        "Polished responsive interface optimized for all modern Android and iOS screen aspect ratios.",
      ],
      architecture: [
        "Layered Clean Architecture (Presentation, Domain, and Data layers).",
        "Repository pattern abstracting remote Firebase and local caching mechanisms.",
        "Predictable state transitions managed via Riverpod StateNotifier and auto-dispose providers.",
      ],
      challenges: "Handling real-time balance calculations across varied categories while ensuring offline support and preventing unnecessary UI widget rebuilds.",
      results: "Built a lightning-fast, production-ready finance app with sub-second response times, smooth 60fps animations, and intuitive zero-friction logging.",
      githubUrl: "https://github.com/MohamedH19",
      liveDemoUrl: "https://github.com/MohamedH19",
      featured: true,
    },
    {
      id: "weather-app",
      title: "Weather App",
      subtitle: "Dynamic Real-Time Meteorological Mobile Application with Multi-Location Forecasts",
      category: "mobile",
      image: "/assets/ProfesscionalWeatherApp-project-experince.png",
      description: "A comprehensive mobile weather application that provides real-time meteorological information through a clean and user-friendly interface, including temperature, weather conditions, humidity, wind speed, atmospheric pressure, cloud coverage, and multi-day forecast data.",
      problem: "Getting accurate, essential weather metrics quickly can be inconvenient when users need to check multiple weather details scattered across complex or ad-heavy applications.",
      solution: "A Flutter-based weather app that aggregates weather telemetry through a high-availability REST API and presents current conditions and future forecasts in a clear, responsive, and aesthetically pleasing interface.",
      role: "Sole Mobile Developer — UI Architecture, REST API Integration, Geolocation Handling, Testing.",
      technologies: ["Flutter", "Dart", "REST API", "HTTP Integration", "JSON Serialization", "Responsive UI", "Android Studio", "VS Code"],
      features: [
        "Real-time weather data lookup for current location and global searchable cities.",
        "Rich meteorological indicators: Temperature, Feels-like, Humidity, Wind speed, Atmospheric pressure, and Cloudiness.",
        "5-day / 24-hour visual forecast timeline with condition icons.",
        "Dynamic UI theming and backgrounds adapting to day/night and active weather conditions.",
        "Graceful offline handling, retry mechanisms, and informative error states for network dropouts.",
      ],
      architecture: [
        "BLoC / Provider architectural pattern separating network fetching from UI rendering.",
        "Dedicated HTTP Service layer with JSON model deserialization and safety guards.",
        "Responsive layout scaling smoothly from compact phones to larger tablets.",
      ],
      challenges: "Gracefully handling diverse network latency, API rate limits, and parsing deeply nested JSON payloads without stuttering the UI thread.",
      results: "Engineered a reliable, elegant daily utility app that provides instant meteorological insights with smooth visual feedback.",
      githubUrl: "https://github.com/MohamedH19",
      liveDemoUrl: "https://github.com/MohamedH19",
      featured: true,
    },
    {
      id: "fitflow-fitness",
      title: "FitFlow Companion",
      subtitle: "Cross-Platform Health, Fitness & Workout Tracking Application",
      category: "mobile",
      image: "/assets/fitflow-project.jpg",
      description: "FitFlow is an interactive health and workout tracking mobile app built with Flutter. It empowers users to monitor their daily physical routines, log strength training and cardio sessions, visualize activity streaks, and achieve personalized wellness milestones.",
      problem: "Gym-goers and fitness enthusiasts struggle with overly complex fitness apps that require too many taps during high-intensity training sessions.",
      solution: "FitFlow streamlines routine tracking with quick-action timers, clear circular activity rings, weekly performance bar charts, and an uncluttered dark-mode visual hierarchy.",
      role: "Cross-Platform Mobile Engineer — UI/UX Wireframing, State Flow, Local Persistence.",
      technologies: ["Flutter 3.x", "Dart", "Riverpod", "Hive DB", "GoRouter", "Custom Canvas Charts"],
      features: [
        "Visual activity rings showing movement, exercise, and stand goals in real-time.",
        "One-tap workout logging for strength sets, reps, and running duration.",
        "Custom charts displaying weekly training volume and progress curves.",
        "Offline-first architecture with instantaneous local data access using Hive.",
        "Dark-first cyber aesthetic designed for low-light gym environments.",
      ],
      architecture: [
        "Feature-first directory structure with modular component boundaries.",
        "Riverpod state management for synchronous local database streaming.",
      ],
      challenges: "Designing custom fluid chart animations on Flutter Canvas while preserving battery efficiency and fast render times.",
      results: "Demonstrated modern mobile UI excellence, achieving 60fps frame rates and intuitive one-hand navigation.",
      githubUrl: "https://github.com/MohamedH19",
      liveDemoUrl: "https://github.com/MohamedH19",
      featured: true,
    }
  ] as Project[],

  experience: [
    {
      id: "iti-trainee",
      title: "Flutter Mobile Developer Trainee",
      company: "Information Technology Institute (ITI)",
      organizationType: "Ministry of Communications & Information Technology (MCIT)",
      location: "Cairo, Egypt",
      period: "Intensive Professional Program",
      description: "Completed an intensive, highly competitive professional training program in cross-platform mobile application development, mastering Flutter, Dart, enterprise architectural paradigms, and full-lifecycle software delivery.",
      responsibilities: [
        "Architected and engineered production-level Flutter applications using Riverpod, BLoC, and Clean Architecture principles.",
        "Integrated complex RESTful APIs, JWT authentication protocols, and Firebase Cloud Messaging for push notifications.",
        "Collaborated in Agile/Scrum sprints, adhering to code review standards, Git version control, and CI/CD pipelines.",
        "Conducted UI/UX usability assessments, unit testing, and mobile performance profiling on Android and iOS emulators and physical devices.",
      ],
      achievements: [
        "Graduated with top evaluation on hands-on cross-platform capstone applications.",
        "Received the official Professional Training Certificate in Flutter Development.",
      ],
      technologies: ["Flutter 3.x", "Dart", "Riverpod", "Firebase", "REST APIs", "Git", "Android Studio", "Postman"],
      certificateAsset: "/assets/ProfessionalTraining-Flutter-ITI-Experince.jpg",
    },
    {
      id: "cross-platform-dev",
      title: "Cross-Platform Mobile Developer & Freelance",
      company: "Independent / Client Projects",
      organizationType: "Freelance & Open Source",
      location: "Cairo, Egypt",
      period: "Ongoing",
      description: "Designing, building, and deploying cross-platform mobile solutions for startups and individual clients with a focus on responsiveness, robust state handling, and delightful animations.",
      responsibilities: [
        "Developing end-to-end mobile apps from Figma/Adobe XD designs into fully functional Flutter codebases.",
        "Building backend microservices and REST APIs using Node.js, Express, and Prisma ORM to power mobile apps.",
        "Implementing secure authentication flows (OAuth, JWT, Firebase Auth) and real-time database synchronizations.",
        "Optimizing app launch times, reducing bundle sizes, and resolving cross-device UI inconsistencies.",
      ],
      achievements: [
        "Delivered multiple functional mobile prototypes and production-ready applications with positive client feedback.",
        "Maintained high code quality and test coverage across public GitHub repositories.",
      ],
      technologies: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "Firebase", "Prisma", "REST API"],
    },
    {
      id: "academic-projects",
      title: "Computer Science Academic & Capstone Projects",
      company: "Ain Shams University",
      organizationType: "Faculty of Computer Science",
      location: "Cairo, Egypt",
      period: "Undergraduate Studies",
      description: "Spearheaded technical software projects focusing on algorithms, database engineering, object-oriented software design, and mobile computing.",
      responsibilities: [
        "Implemented foundational algorithms and data structures in C++, Java, and Python.",
        "Designed relational database schemas with MySQL, normal forms, and ACID-compliant transaction flows.",
        "Participated in collegiate problem-solving workshops and technical presentations.",
      ],
      achievements: [
        "Successfully delivered all core engineering milestones and computer science coursework.",
      ],
      technologies: ["C++", "Java", "Python", "MySQL", "Algorithms", "OOP", "Software Engineering"],
    }
  ] as ExperienceItem[],

  services: [
    {
      id: "cross-platform",
      title: "Cross-Platform Mobile Development",
      description: "Developing scalable, high-performance iOS and Android applications from a single unified codebase using Flutter and Dart, saving cost and time-to-market without compromising native speed.",
      iconName: "Smartphone",
      deliverables: [
        "Android & iOS cross-platform delivery",
        "Clean, maintainable architecture (Riverpod / BLoC)",
        "Offline-first caching & local databases",
        "Seamless store deployment readiness"
      ],
      technologies: ["Flutter", "Dart", "Riverpod", "Android Studio", "iOS"]
    },
    {
      id: "ui-ux",
      title: "Mobile UI/UX Implementation",
      description: "Translating wireframes and UI designs into pixel-perfect, responsive mobile interfaces that comply with Material 3 and Apple Human Interface Guidelines.",
      iconName: "Palette",
      deliverables: [
        "Pixel-perfect responsive layouts",
        "Fluid 60fps micro-animations & transitions",
        "Dark & Light mode customization",
        "Accessibility & keyboard-friendly navigation"
      ],
      technologies: ["Material 3", "Cupertino", "Custom Painters", "Figma to Flutter"]
    },
    {
      id: "api-backend",
      title: "API & Backend Integration",
      description: "Connecting mobile frontends to robust cloud backends, RESTful APIs, and real-time databases with secure token management and resilient error handling.",
      iconName: "Globe",
      deliverables: [
        "REST API & WebSocket integration",
        "Firebase Firestore & Cloud Functions",
        "Push notifications via Firebase Cloud Messaging",
        "Secure JWT authentication & refresh flows"
      ],
      technologies: ["REST API", "Firebase", "Node.js", "Express", "JWT"]
    },
    {
      id: "optimization",
      title: "App Optimization & Code Refactoring",
      description: "Auditing existing mobile applications to eliminate performance bottlenecks, reduce memory footprint, refactor legacy code, and upgrade to the latest Flutter SDK.",
      iconName: "Zap",
      deliverables: [
        "Widget rebuild optimization & memory leak audits",
        "State management refactoring to Riverpod",
        "Bundle size reduction & startup speed tuning",
        "Bug fixes & multi-device compatibility patches"
      ],
      technologies: ["Flutter DevTools", "Riverpod", "Clean Architecture", "Code Profiling"]
    }
  ] as ServiceItem[],

  contact: {
    title: "Let's Build Something Exceptional Together",
    subtitle: "Whether you have an upcoming mobile app project, a full-time role, or need an experienced Flutter developer to bring your idea to life, my inbox is always open.",
    email: "mh28321@gmail.com",
    phone: "+201012981220",
    phoneDisplay: "+20 101 298 1220",
    location: "Cairo, Egypt",
    availabilityStatus: "Open to Full-time Opportunities & Select Freelance Projects",
    responseTime: "Typically responds within 24 hours",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-hesham-444ab7214", icon: "Linkedin" },
      { name: "GitHub", url: "https://github.com/MohamedH19", icon: "Github" },
      { name: "WhatsApp", url: "https://wa.me/201012981220", icon: "MessageCircle" },
      { name: "Email", url: "mailto:mh28321@gmail.com", icon: "Mail" },
    ]
  }
};
