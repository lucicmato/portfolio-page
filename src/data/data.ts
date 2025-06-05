import githubIcon from '../assets/images/icon-github.svg';
import linkedInIcon from '../assets/images/icon-linkedin.svg';
import cPIHandler from '../assets/images/cpi-handler.jpg';
import portfolioPage from '../assets/images/portfolio-page.jpg';
import gerArticlesPractice from '../assets/images/ger-arcticles-practice.jpg';
import fitPhisioLn from '../assets/images/FitPhisioLn.png';
import logoSlatkoITocka from '../assets/images/logo-slatko-i-tocka.png';

import { Technology } from '../models/Enums';
import { Experience, Project } from '../models/Models';

export default {
  links: [
    { site: 'LinkedIn', url: 'https://www.linkedin.com/in/mato-lučić-3247b215b', icon: linkedInIcon },
    { site: 'GitHub', url: 'https://github.com/lucicmato/', icon: githubIcon },
  ],
  representation: {
    developerName: 'Mato Lučić',
    description:
      'I am a passionate frontend/full-stack developer with a strong foundation in HTML, CSS, JavaScript (ReactJs/NextJs), Wordpress, Java and associated tools and technologies for application development.\n' +
      'I graduated at the Faculty of Electrical Engineering with a degree in Computer Engineering. Most of my experience focuses on creating business applications and web pages. ' +
      'I am a great problem solver. My passion is bringing websites and web applications to life with up-to-date technologies and best practices to create responsive, and user-friendly interfaces. ',
  },
};

export const experience: Experience[] = [
  { name: Technology.JAVASCRIPT, yearsOfExperience: 7 },
  { name: Technology.REACTJS, yearsOfExperience: 5 },
  { name: Technology.NEXTJS, yearsOfExperience: 1 },
  { name: Technology.ANGULARJS, yearsOfExperience: 2 },
  { name: Technology.ANGULAR, yearsOfExperience: 0.5 },
  { name: Technology.HTML, yearsOfExperience: 7 },
  { name: Technology.CSS, yearsOfExperience: 7 },
  { name: Technology.SCSS, yearsOfExperience: 7 },
  { name: Technology.JAVA, yearsOfExperience: 2.5 },
  { name: Technology.C, yearsOfExperience: 1 },
  { name: Technology.VITE, yearsOfExperience: 2 },
  { name: Technology.NODEJS, yearsOfExperience: 0.5 },
  { name: Technology.EXPRESSJS, yearsOfExperience: 0.5 },
  { name: Technology.TILEWIND, yearsOfExperience: 2 },
  { name: Technology.BOOTSTRAP, yearsOfExperience: 1 },
  { name: Technology.REACTBOOTSTRAP, yearsOfExperience: 0.5 },
  { name: Technology.WORDPRESS, yearsOfExperience: 2 },
  { name: Technology.ELEMENTOR, yearsOfExperience: 2 },
  { name: Technology.FIGMA, yearsOfExperience: 3 },
  { name: Technology.MATERIALUI, yearsOfExperience: 1 },
  { name: Technology.DATABASES, yearsOfExperience: 3 },
  { name: Technology.MONGODB, yearsOfExperience: 0.5 },
  { name: Technology.MERN, yearsOfExperience: 0.5 },
  { name: Technology.GIT, yearsOfExperience: 7 },
];

export const projects: Project[] = [
  {
    src: portfolioPage,
    name: 'Portfolio Page',
    technology: [
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.HTML,
      Technology.SCSS,
      Technology.VITE,
      Technology.TILEWIND,
    ],
    codeLink: 'https://github.com/lucicmato/portfolio-page',
  },
  {
    src: gerArticlesPractice,
    name: 'German Articles Trainer',
    technology: [
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.HTML,
      Technology.SCSS,
      Technology.NODEJS,
      Technology.MONGODB,
      Technology.EXPRESSJS,
      Technology.MATERIALUI,
      Technology.MERN,
    ],
    codeLink: 'https://github.com/lucicmato/german-articles',
  },
  {
    src: cPIHandler,
    name: 'CPI Handler',
    technology: [
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.HTML,
      Technology.SCSS,
      Technology.VITE,
      Technology.REACTBOOTSTRAP,
    ],
    codeLink: 'https://github.com/lucicmato/CPIHandler',
  },
  {
    src: fitPhisioLn,
    name: 'FitPhysioLN',
    technology: [Technology.WORDPRESS, Technology.ELEMENTOR, Technology.JAVASCRIPT],
    projectDemoLink: 'https://fitphysioln.com/',
  },
  {
    src: logoSlatkoITocka,
    name: 'Slatko-i-Tocka',
    technology: [
      Technology.CSS,
      Technology.GIT,
      Technology.NEXTJS,
      Technology.HTML,
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.TILEWIND,
    ],
    projectDemoLink: 'https://sweet-project-2j6wchowm-mato-lucics-projects.vercel.app/',
    codeLink: 'https://github.com/lucicmato/sweet-project',
  },
];

export const eMail = 'lucicmato93@gmail.com';
