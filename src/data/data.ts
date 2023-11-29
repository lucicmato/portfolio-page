import githubIcon from '../assets/images/icon-github.svg';
import facebookIcon from '../assets/images/icon-twitter.svg';
import linkedInIcon from '../assets/images/icon-linkedin.svg';
import { IExperience } from '../models/Models';
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
  { name: 'JavaScript', yearsOfExperience: 5 },
  { name: 'ReactJS', yearsOfExperience: 3 },
  { name: 'AngularJS', yearsOfExperience: 2 },
  { name: 'HTML', yearsOfExperience: 5 },
  { name: 'CSS', yearsOfExperience: 5 },
  { name: 'SCSS', yearsOfExperience: 5 },
  { name: 'Java', yearsOfExperience: 2.5 },
];
