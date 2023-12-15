import githubIcon from '../assets/images/icon-github.svg';
import facebookIcon from '../assets/images/icon-twitter.svg';
import linkedInIcon from '../assets/images/icon-linkedin.svg';
import cPIHandler from '../assets/images/cpi-handler.jpg';
import portfolioPage from '../assets/images/portfolio-page.jpg';

import { Technology } from '../models/Enums';

import { IExperience, IProject } from '../models/Models';

export default {
  links: [
    { site: 'Facebook', url: 'https://www.facebook.com/', icon: facebookIcon },
    { site: 'LinkedIn', url: 'https://www.linkedin.com/in/mato-lučić-3247b215b', icon: linkedInIcon },
    { site: 'GitHub', url: 'https://github.com/lucicmato/', icon: githubIcon },
  ],
  representation: {
    developerName: 'Mato Lučić',
    description:
      'I am a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript (React). I bring websites and web applications to life with up-to-date web technologies and best practices to create responsive, and user-friendly cool interfaces. ',
  },
};

export const experience: IExperience[] = [
  { name: Technology.JAVASCRIPT, yearsOfExperience: 5 },
  { name: Technology.REACTJS, yearsOfExperience: 3 },
  { name: Technology.ANGULARJS, yearsOfExperience: 2 },
  { name: Technology.HTML, yearsOfExperience: 5 },
  { name: Technology.CSS, yearsOfExperience: 5 },
  { name: Technology.SCSS, yearsOfExperience: 5 },
  { name: Technology.JAVA, yearsOfExperience: 2.5 },
  { name: Technology.TILEWIND, yearsOfExperience: 1 },
  { name: Technology.VITE, yearsOfExperience: 1 },
  { name: Technology.REACTBOOTSTRAP, yearsOfExperience: 1 },
];

export const projects: IProject[] = [
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
];
