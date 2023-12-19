import React from 'react';

import { Technology } from '../../../models/Enums';

interface ProjectInfoProps {
  projectName: string;
  projectTechnology: Technology[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectName, projectTechnology }) => {
  return (
    <div>
      <h4 className="uppercase  text-[1.5rem] leading-8 font-bold font-sans font-custom-features">{projectName}</h4>
      <p className="uppercase text-grey">
        {projectTechnology.map((technology) => {
          return (
            <span className="pr-[1.125rem]" key={technology}>
              {technology}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default ProjectInfo;
