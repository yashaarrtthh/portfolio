// ============================================================
// portfolioData.js - Centralized configuration for Yasharth Sharma's portfolio
// ============================================================

export const personalInfo = {
  name: "Yasharth Sharma",
  firstName: "Yasharth",
  brandName: "Yasharth",
  title: "Frontend Developer & Blockchain CSE Student",
  location: "Potheri, Chennai, Tamil Nadu 603203",
  phone: "+91 82796-56170",
  emails: {
    primary: "yash.aarrtthh@gmail.com",
    secondary: "yash.aarrtthh@gmail.com",
  },
  summary:
    "Second-year B.Tech CSE student specialising in Blockchain Technology at SRM Institute of Science and Technology, Chennai. Passionate about software development, frontend engineering, emerging technologies, and practical user-friendly digital solutions.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/yashaarrtthh",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Yasharth Sharma",
  titleHighlight: "Frontend Developer",
  subtitle:
    "I build practical, user-friendly web experiences while growing deeper in blockchain technology, software development, and problem-solving.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: `mailto:${personalInfo.emails.primary}?subject=Portfolio Inquiry&body=Hello Yasharth,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest Regards,`,
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Yasharth Sharma</span>, a second-year B.Tech CSE student specialising in Blockchain Technology at SRM University, Chennai. I enjoy building frontend interfaces, exploring emerging technologies, and turning academic ideas into practical digital experiences.`,
  techStack: ["HTML", "JavaScript", "C++"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into practical digital experiences",
  description:
    "I work through ideas with a clear process: understand the goal, design the flow, build the interface, and keep improving through feedback.",
  cards: [
    {
      number: "01",
      title: "Explore",
      text: "I start by understanding the problem, the audience, and the technical requirements before choosing a practical direction.",
    },
    {
      number: "02",
      title: "Design",
      text: "I shape clean layouts and user flows that make projects easy to navigate, understand, and use.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build responsive frontend experiences with HTML, CSS, JavaScript, and modern web development practices.",
    },
    {
      number: "04",
      title: "Improve",
      text: "I test, refine, and keep learning from each project so the final result feels sharper and more reliable.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 82 },
        { name: "Python", level: 78 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 84 },
        { name: "Responsive Design", level: 82 },
        { name: "Web Development", level: 84 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 78 },
        { name: "GitHub", level: 78 },
        { name: "VS Code", level: 86 },
      ],
    },
    {
      title: "Specialization",
      skills: [
        { name: "Blockchain Technology", level: 72 },
        { name: "Emerging Technologies", level: 76 },
        { name: "Software Development", level: 80 },
      ],
    },
    {
      title: "Core Strengths",
      skills: [
        { name: "Problem Solving", level: 84 },
        { name: "Analytical Thinking", level: 80 },
        { name: "Collaboration", level: 82 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "English", level: 88 },
        { name: "Hindi", level: 92 },
      ],
    },
  ],
};

export const internshipsList = [
  {
    organization: "Academic & Personal Projects",
    role: "Frontend Development Practice",
    duration: "2025 - Present",
    skills: ["Responsive Layouts", "User-Friendly Interfaces", "Web Applications", "Project Iteration"],
    tech: ["HTML", "CSS", "JavaScript", "GitHub"],
  },
  {
    organization: "Hackathon Prototypes",
    role: "Prototype Builder",
    duration: "Ongoing",
    skills: ["Rapid Ideation", "Problem Solving", "Team Collaboration", "Emerging Tech Exploration"],
    tech: ["Frontend", "JavaScript", "Git", "Presentation"],
  },
  {
    organization: "SRM Institute of Science and Technology",
    role: "Blockchain CSE Student",
    duration: "2025 - 2029",
    skills: ["Computer Science Foundations", "Blockchain Concepts", "Software Development", "Analytical Learning"],
    tech: ["C++", "Python", "JavaScript", "Web"],
  },
];

export const education = {
  degree: "B.Tech - Computer Science & Engineering",
  specialization: "Specialisation in Blockchain Technology",
  institution: "SRM Institute of Science and Technology, Kattankulathur",
  location: "Chennai, Tamil Nadu",
  duration: "2025 - 2029",
  status: "Second-year undergraduate student",
  twelfth: "Class 12 - Maheshwari Public School, Kota - 71.4%",
  tenth: "Class 10 - Sir Padampat Singhania School, Kota - 91.2%",
};

export const projects = [
  {
    id: "portfolio",
    number: "01",
    badge: "Featured Project",
    title: "Personal Portfolio Website",
    description:
      "A premium responsive portfolio experience presenting my profile, education, skills, projects, resume, and contact information with a cinematic hero reel and polished section transitions.",
    techTags: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive UI"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "academic-web-apps",
    number: "02",
    badge: null,
    title: "Academic Web Applications",
    description:
      "Hands-on academic web projects focused on building practical, user-friendly interfaces while strengthening frontend engineering, software development, and problem-solving skills.",
    techTags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
  {
    id: "hackathon-prototypes",
    number: "03",
    badge: null,
    title: "Hackathon Prototypes",
    description:
      "Prototype-driven work exploring emerging technologies, fast ideation, interface design, and collaborative problem-solving for real-world digital solution concepts.",
    techTags: ["Frontend", "JavaScript", "Problem Solving", "Emerging Tech"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "B.Tech CSE - Blockchain Technology",
      issuer: "SRM Institute of Science and Technology",
      icon: "⛓️",
    },
    {
      name: "Frontend Development Practice",
      issuer: "Academic & Personal Projects",
      icon: "💻",
    },
    {
      name: "Git & GitHub Workflow",
      issuer: "Project Tooling",
      icon: "🔧",
    },
  ],
  viewAllUrl: null,
};

export const footerContent = {
  taglines: [
    "Frontend Development",
    "Blockchain Technology Student",
    "Practical Web Experiences",
  ],
  credential: "B.Tech CSE - Blockchain Technology",
  copyright: `© ${new Date().getFullYear()} Yasharth Sharma | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
