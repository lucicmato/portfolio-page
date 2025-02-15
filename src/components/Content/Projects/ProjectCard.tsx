import React from 'react';

interface ProjectCardProps {
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return (
    <div
      className={`pt-12 w-full z-10 md:flex md:flex-col md:justify-between md:h-full xl:flex xl:flex-col xl:justify-between xl:h-full`}
    >
      {children}
    </div>
  );
};

export default ProjectCard;
