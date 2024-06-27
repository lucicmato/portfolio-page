import React from 'react';
import BaseButton from '../../Common/BaseButton';
import ProjectCard from './ProjectCard';
import ProjectImg from './ProjectImg';
import ProjectInfo from './ProjectInfo';

import { IProject } from '../../../models/Models';
import { BaseButtonText } from '../../../models/Enums';

interface ProjectsProps {
  projects: IProject[];
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="px-4 mt-20 pb-[5.75rem]">
      <div className="flex justify-between ">
        <h1>Projects</h1> {/**lg:text-hxl lg:tracking-tight font-bold leading-hxl */}
        <BaseButton buttonText={BaseButtonText.CONTACTME} />
      </div>
      <div className='flex flex-col items-center md:flex-row'>
      {projects.map((project) => (
        <ProjectCard>
          <ProjectImg imgSrc={project.src} />
          <ProjectInfo projectName={project.name} projectTechnology={project.technology} />
          {project.projectDemoLink && <BaseButton buttonText={BaseButtonText.VIEWPROJECT} position="pt-5 pr-8" />}
          {project.codeLink && <BaseButton buttonText={BaseButtonText.VIEWCODE} position="pt-5 pr-8" />}
        </ProjectCard>
      ))}
    </div>
    </section>
  );
};

export default Projects;
