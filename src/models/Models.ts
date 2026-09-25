import { Technology } from './Enums';

export interface Project {
  src: string;
  name: string;
  technology: Technology[];
  projectDemoLink?: string;
  codeLink?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
