import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Abhishek Pandey.`,
 description: (
  <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I am computer science enthusiast with a strong interest in <strong className="text-stone-100">Artificial Intelligence</strong>, 
      <strong className="text-stone-100"> Cloud Computing</strong>, and building technology that creates real social impact.
    </p>

    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I have hands-on experience with <strong className="text-stone-100">Python</strong>, 
      <strong className="text-stone-100"> Java</strong>, web technologies, Linux systems, and hold a professional certification in 
      <strong className="text-stone-100">AI&ML Engineering and Cybersecurity</strong>.
    </p>

    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
     <strong className="text-stone-100">I am also passionate about contributing to open source projects and mentoring aspiring developers.</strong> I'm currently,aiming to grow as an AI engineer and researcher.
    </p>
  </>
),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {

  description: `CS student with a passion for AI, ML, and Cloud Computing. Skilled in Python, Java, and Linux systems. Eager to contribute to innovative tech projects and grow as an AI engineer.`,
  aboutItems: [
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Philosophical communication,Cricket,classical music and EDM', Icon: SparklesIcon},
    
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 9 },
      { name: 'Java', level: 8 },
      { name: 'JavaScript', level: 8 },
      { name: 'C++', level: 7 },
    ],
  },
  {
    name: 'Artificial Intelligence & Data',
    skills: [
      { name: 'Machine Learning', level: 8 },
      { name: 'Deep Learning', level: 7 },
      { name: 'NLP', level: 7 },
      { name: 'Data Structures & Algorithms', level: 8 },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'React', level: 8 },
      { name: 'Next.js', level: 7 },
      { name: 'HTML/CSS', level: 9 },
      { name: 'Node.js', level: 7 },
    ],
  },
  {
    name: 'Cloud & Systems',
    skills: [
      { name: 'Cloud Computing', level: 7 },
      { name: 'Linux Administration', level: 8 },
      { name: 'Docker Basics', level: 6 },
      { name: 'Networking Fundamentals', level: 7 },
    ],
  },
  {
    name: 'Security',
    skills: [
      { name: 'Cybersecurity Fundamentals', level: 8 },
      { name: 'Cryptography Basics', level: 7 },
      { name: 'Secure Coding Practices', level: 7 },
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      { name: 'English', level: 9 },
      { name: 'Hindi', level: 10 },
    ],
  },
];
/**
 * Experiene section
 */
export const experience = [
  {
    title: 'Academic & Personal Projects',
    company: 'Self-Driven Learning',
    description:
      'Working on AI, Machine Learning, Cloud Computing and full-stack projects while preparing for GATE and UGC NET. Focused on building strong computer science fundamentals and practical systems knowledge.',
  },
  {
    title: 'Cybersecurity Certification Training',
    company: 'Professional Certification',
    date: '2023',
    description:
      'Completed professional certification in Cybersecurity covering network security, cryptography basics, secure coding, and system protection concepts.',
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI Resume Screening System',
    description:
      'Machine Learning based system that analyzes resumes and ranks candidates using NLP techniques. Built to automate recruitment screening and improve shortlisting efficiency.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Cloud-Based File Storage App',
    description:
      'Secure cloud application allowing users to upload, manage and access files from anywhere. Implemented authentication, file encryption basics, and scalable backend structure.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Cybersecurity Threat Detection Dashboard',
    description:
      'A monitoring dashboard that visualizes network logs and identifies suspicious patterns. Demonstrates understanding of cybersecurity fundamentals and system security.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Student Result Prediction using ML',
    description:
      'Predictive model that estimates student performance using machine learning algorithms and data preprocessing techniques.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Linux Server Automation Scripts',
    description:
      'Collection of Bash scripts to automate server setup, user management, and system monitoring tasks in Linux environments.',
    url: '#',
    image: porfolioImage5,
  },
];
/**
 * Testimonial section
 */
export const testimonials: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Academic Projects & Research Focus',
      text: 'Focused on building strong fundamentals in Artificial Intelligence, Machine Learning, and system design through academic projects and research-oriented learning.',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
    },
    {
      name: 'Practical Technical Experience',
      text: 'Hands-on experience with Python, Java, Linux systems, and cloud concepts. Built multiple projects involving ML models, web development, and system automation.',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    },
    {
      name: 'Security & Systems Knowledge',
      text: 'Professional certification in Cybersecurity with interest in secure system design, network fundamentals, and cloud security practices.',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Thanks for visiting my portfolio 👋 I\'m always open to discussing tech, AI projects, internships, and collaborations. If you\'re a recruiter, developer, or student — feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'abhishekpandeyap88273@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'abishek1111 (Abhishek Pandey )',
    },
  ],
};
/**
 * Educational Details 
 */
export const education = [
  {
    title: 'Master’s Degree',
    
    
    description: 'Focusing on Artificial Intelligence, Machine Learning, Cloud Computing and advanced Computer Science concepts.',
  },
  {
    title: 'Bachelor’s Degree',
   
    date: '2017 – 2021',
    description: 'Built strong foundation in programming, data structures, and computer science fundamentals.',
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'www.linkedin.com/in/abhishek-pandey-1a85b830a'},
  
];
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Academic Focus',
      text: 'Focused on AI, ML, Cloud Computing and system design through academic and personal projects.',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
    },
  ],
};
