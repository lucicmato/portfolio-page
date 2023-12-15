import React from 'react';

import { Technology } from '../../../models/Enums';

interface ProjectInfoProps {
  projectName: string;
  projectTechnology: Technology[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectName, projectTechnology }) => {
  return (
    <div>
      <h4>{projectName}</h4>
      {projectTechnology.map((technology) => (
        <span>{technology}</span>
      ))}
    </div>
  );
};

export default ProjectInfo;
