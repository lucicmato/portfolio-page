import React from 'react';
import ContactMeButton from '../../Common/ContactMeButton';
import ProjectCard from './ProjectCard';
import ProjectImg from './ProjectImg';
import ProjectInfo from './ProjectInfo';

import { IProject } from '../../../models/Models';

interface ProjectsProps {
  projects: IProject[];
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section>
      <div className="flex justify-between mx-4 mt-20">
        <h1>Projects</h1> {/**lg:text-hxl lg:tracking-tight font-bold leading-hxl */}
        <ContactMeButton />
      </div>
      {projects.map((project) => (
        <ProjectCard>
          <ProjectImg imgSrc={project.src} />
          <ProjectInfo
            projectName={project.name}
            projectTechnology={project.technology}
          />
        </ProjectCard>
      ))}
    </section>
  );
};

export default Projects;
