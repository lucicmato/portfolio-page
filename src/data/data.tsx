import githubIcon from '../assets/images/icon-github.svg';
import linkedInIcon from '../assets/images/icon-linkedin.svg';
import cPIHandler from '../assets/images/cpi-handler.jpg';
import portfolioPage from '../assets/images/portfolio-page.jpg';
import gerArticlesPractice from '../assets/images/ger-arcticles-practice.jpg';
import fitPhisioLn from '../assets/images/FitPhisioLn.png';
import logoSlatkoITocka from '../assets/images/logo-slatko-i-tocka.png';
import logoBirchwood from '../assets/images/logo-birchwood.jpg';
import logoFamilyApp from '../assets/images/logo-family-app.png';

import { Technology } from '../models/Enums';
import { Project } from '../models/Models';

export default {
  links: [
    { site: 'LinkedIn', url: 'https://www.linkedin.com/in/mato-lučić-3247b215b', icon: linkedInIcon },
    { site: 'GitHub', url: 'https://github.com/lucicmato/', icon: githubIcon },
  ],
  representation: {
    developerName: 'Mato Lučić',
    // Previous description,(kept for reference):
    // description:
    //   'I am a passionate frontend/full-stack developer with a strong foundation in HTML, CSS, JavaScript (ReactJs/NextJs), Wordpress, Java and associated tools and technologies for application development.\n' +
    //   'I graduated at the Faculty of Electrical Engineering with a degree in Computer Engineering. Most of my experience focuses on creating business applications and web pages. ' +
    //   'I am a great problem solver. My passion is bringing websites and web applications to life with up-to-date technologies and best practices to create responsive, and user-friendly interfaces. ',
    description: (
      <>
        <p>
          Full-Stack React / Next.js developer with a degree in Computer Engineering from the Faculty of Electrical
          Engineering.
        </p>
        <p>
          <b>
            I build production-ready web applications for people, small teams and startups — focused on clean
            architecture, practical solutions and good user experience.
          </b>
        </p>
        <p>
          <b>
            I help clients get exactly what they need, without unnecessary complexity. Lately I’ve been working a lot
            with modern Next.js apps and practical AI integrations.
          </b>
        </p>
        <p>
          <u className="decoration-green underline-offset-4">Main stack</u>: Next.js (App Router), TypeScript, Supabase, Tailwind CSS,
          Vercel.
        </p>
      </>
    ),
  },
};

export const coreStack: Technology[] = [
  Technology.NEXTJS,
  Technology.REACTJS,
  Technology.TYPESCRIPT,
  Technology.TAILWIND,
  Technology.SUPABASE,
  Technology.VERCEL,
];

export const otherStack: Technology[] = [
  Technology.JAVASCRIPT,
  Technology.NODEJS,
  Technology.EXPRESSJS,
  Technology.MONGODB,
  Technology.ANGULAR,
  Technology.ANGULARJS,
  Technology.JAVA,
  Technology.C,
  Technology.SCSS,
  Technology.VITE,
  Technology.MATERIALUI,
  Technology.BOOTSTRAP,
  Technology.WORDPRESS,
  Technology.FIGMA,
  Technology.GIT,
];

export const projects: Project[] = [
  {
    src: logoFamilyApp,
    name: 'Family App',
    technology: [
      Technology.NEXTJS,
      Technology.REACTJS,
      Technology.TYPESCRIPT,
      Technology.TAILWIND,
      Technology.SUPABASE,
      Technology.VERCEL,
    ],
    codeLink: 'https://github.com/lucicmato/family-app',
  },
  {
    src: portfolioPage,
    name: 'Portfolio Page',
    technology: [
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.HTML,
      Technology.SCSS,
      Technology.VITE,
      Technology.TAILWIND,
    ],
    codeLink: 'https://github.com/lucicmato/portfolio-page',
  },
  {
    src: logoBirchwood,
    name: 'Birchwood Paintball 2.0',
    technology: [
      Technology.SCSS,
      Technology.GIT,
      Technology.NEXTJS,
      Technology.HTML,
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.TAILWIND,
    ],
    projectDemoLink: 'https://birchwood-paintball-project-dml4n7iiz-mato-lucics-projects.vercel.app/',
    codeLink: 'https://github.com/lucicmato/birchwood-paintball-project',
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
    src: logoSlatkoITocka,
    name: 'Slatko-i-Tocka',
    technology: [
      Technology.CSS,
      Technology.GIT,
      Technology.NEXTJS,
      Technology.HTML,
      Technology.JAVASCRIPT,
      Technology.REACTJS,
      Technology.TAILWIND,
    ],
    projectDemoLink: 'https://sweet-project-2j6wchowm-mato-lucics-projects.vercel.app/',
    codeLink: 'https://github.com/lucicmato/sweet-project',
  },
  {
    src: fitPhisioLn,
    name: 'FitPhysioLN',
    technology: [Technology.WORDPRESS, Technology.ELEMENTOR, Technology.JAVASCRIPT],
    projectDemoLink: 'https://fitphysioln.com/',
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

export const eMail = 'lucicmato93@gmail.com';
