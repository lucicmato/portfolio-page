import React from 'react';

interface ProjectCardProps {
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return <div className={`pt-12 w-full z-10`}>{children}</div>;
};

export default ProjectCard;
