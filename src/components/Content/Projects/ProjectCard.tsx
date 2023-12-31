import React from 'react';

interface ProjectCardProps {
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return <div className="px-4 pt-12">{children}</div>;
};

export default ProjectCard;
