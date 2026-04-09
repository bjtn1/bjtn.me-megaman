export const personalInfo = {
  name: "Brandon Jose Tenorio Noguera",
  location: "DMV-Baltimore area, U.S.A.",
  email: "bjtn_website@bjtn.me",
  github: "https://github.com/bjtn1",
  linkedin: "https://www.linkedin.com/in/brandon-jose-tenorio-noguera/",
};

export const workExperience = [
  {
    company: "Teamania",
    location: "Rockville, MD",
    position: "Supervisor",
    period: "March 2019 - Present",
    achievements: [
      "Led a team of 5 to optimize closing procedures, cutting down closing time by 25% through workflow restructuring",
      "Maintained and built relationships with 50+ customers daily",
      "Managed and trained a team of 5 people to carry out efficient, effective, and satisfactory customer service",
      "Demonstrated strong organizational skills in managing multiple tasks efficiently in a fast-paced environment",
    ],
  },
  {
    company: "Biology Department - UMBC",
    location: "Catonsville, MD",
    position: "Research Lab Aide",
    period: "August 2023 - December 2023",
    achievements: [
      "Collaborated closely with 6 graduate students to understand research needs and provide effective support",
      "Safely handled and managed dangerous chemicals within a research laboratory environment",
      "Maintained a clean workspace with equipment in accordance to laboratory standards",
    ],
  },
];

export const education = [
  {
    institution: "University of Maryland - Baltimore County",
    location: "Maryland, U.S.A.",
    degree: "Bachelor of Science in Computer Science",
    period: "May 2022 - December 2024",
    achievements: [
      "CMSC 421: Principles of Operating Systems",
      "CMSC 441: Design & Analysis of Algorithms",
      "CMSC 447: Software Engineering I",
      "CMSC 471: Artificial Intelligence",
      "CMSC 478: Introduction to Machine Learning",
      "CMSC 426: Principles of Computer Security",
      "CMSC 449: Malware Analysis",
      "CMSC 411: Computer Architecture",
      "CMSC 341: Data Structures",
    ],
  },
  {
    institution: "Montgomery College",
    location: "Maryland, U.S.A.",
    degree: "Associate of Arts in Computer Science",
    period: "August 2018 - May 2022",
    achievements: [
      "CMSC 203: Computer Science I",
      "CMSC 204: Computer Science II",
      "CMSC 207: Introduction to Discrete Structures",
      "MATH 181-182: Calculus I & II",
      "MATH 280: Multivariable Calculus",
    ],
  },
];

export const skills = {
  programmingAndDevelopment: [
    { name: "Python", level: 90 },
    { name: "C/C++", level: 85 },
    { name: "Rust", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "Bash", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Astro", level: 70 },
    { name: "Git/GitHub", level: 90 },
    { name: "Neovim/Vim", level: 85 },
    { name: "LaTeX", level: 65 },
    { name: "Linux Kernel Dev", level: 60 },
    { name: "Scikit-learn", level: 70 },
    { name: "Selenium", level: 75 },
  ],
  operatingSystems: [
    { name: "Arch Linux", level: 90 },
    { name: "Debian/Ubuntu", level: 85 },
    { name: "Kali Linux", level: 75 },
    { name: "macOS", level: 70 },
    { name: "Windows", level: 80 },
  ],
  languages: [
    { name: "Spanish (native)", level: 100 },
    { name: "English (fluent)", level: 95 },
    { name: "French (basic)", level: 25 },
    { name: "ASL (basic)", level: 20 },
  ],
};

export const projects = [
  {
    title: "Chess Engine",
    github: "https://github.com/bjtn1/chess",
    technologies: ["C", "Bitboards", "Magic Bitboards"],
    description:
      "Chess engine using magic bitboards for efficient sliding piece move generation. Supports standard algebraic notation and perft testing.",
  },
  {
    title: "Kernel Mailbox System",
    github: "https://github.com/bjtn1/mailbox",
    technologies: ["Linux Kernel", "C", "System Calls"],
    description:
      "Character device driver for kernel-level message passing using BST-based mailbox organization with thread-safe queue operations.",
  },
  {
    title: "PoGoCal",
    github: "https://github.com/bjtn1/pogocal",
    demoUrl: "",
    technologies: ["Python", "Google Calendar API", "Selenium"],
    description:
      "Automates synchronization of Pokemon GO events to Google Calendar. Scrapes LeekDuck, handles rate limiting, and runs in Docker.",
  },
  {
    title: "doopie",
    github: "https://github.com/bjtn1/doopie",
    technologies: ["Python", "SHA-256", "CLI"],
    description:
      "Finds duplicate files by comparing SHA-256 checksums with recursive scanning and interactive deletion mode.",
  },
  {
    title: "al",
    github: "https://github.com/bjtn1/al",
    technologies: ["Python", "CLI", "File Organization"],
    description:
      "Organizes files into folders by extension with visual tree output, dry-run mode, and automatic conflict handling.",
  },
  {
    title: "Etch-a-Sketch",
    github: "https://github.com/bjtn1/etch-a-sketch",
    demoUrl: "https://bjtn1.github.io/etch-a-sketch/",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    description:
      "Responsive drawing canvas with color picker, dynamic grid resizing, and eraser tool.",
  },
  {
    title: "Simple Pokemon",
    github: "https://github.com/bjtn1/simple-pokemon",
    demoUrl: "https://bjtn1.github.io/simple-pokemon/",
    technologies: ["JavaScript", "Game Dev", "Web App"],
    description:
      "Pokemon type effectiveness battle game with first-to-5 scoring and mobile-friendly responsive design.",
  },
  {
    title: "task-cli",
    github: "https://github.com/bjtn1/task-cli",
    technologies: ["Python", "JSON", "CLI"],
    description:
      "Task manager with color-coded status indicators, tag system, and JSON schema validation.",
  },
];
