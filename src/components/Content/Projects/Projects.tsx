import React from 'react';

import BaseButton from '../../Common/BaseButton';
import ProjectCard from './ProjectCard';
import ProjectImg from './ProjectImg';
import ProjectInfo from './ProjectInfo';

import { Project } from '../../../models/Models';
import { BaseButtonText } from '../../../models/Enums';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="mt-20 pb-[6rem]">
      <div className="flex justify-between">
        <h2>Projects</h2>
        <BaseButton buttonText={BaseButtonText.CONTACTME} />
      </div>
      <div className="flex flex-col items-center mx-4 md:grid md:grid-cols-2 md:gap-4 md:items-start">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index}>
            <ProjectImg imgSrc={project.src} demoLink={project.projectDemoLink} codeLink={project.codeLink} />
            <ProjectInfo projectName={project.name} projectTechnology={project.technology} />
            {project.projectDemoLink && (
              <BaseButton
                buttonText={BaseButtonText.VIEWPROJECT}
                increaseCss="pt-5 pr-8 xl:hidden"
                projectLink={project.projectDemoLink}
              />
            )}
            {project.codeLink && (
              <BaseButton
                buttonText={BaseButtonText.VIEWCODE}
                increaseCss="pt-5 pr-8 xl:hidden"
                codeLink={project.codeLink}
              />
            )}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
