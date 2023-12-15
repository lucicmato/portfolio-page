import { Technology } from './Enums';

export interface IExperience {
  name: string;
  yearsOfExperience: number;
}

export interface IProject {
  src: string;
  name: string;
  technology: Technology[];
  projectDemoLink?: string;
  codeLink: string;
}
