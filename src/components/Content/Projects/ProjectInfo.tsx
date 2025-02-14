import React from 'react';

import { Technology } from '../../../models/Enums';

interface ProjectInfoProps {
  projectName: string;
  projectTechnology: Technology[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectName, projectTechnology }) => {
  return (
    <div className='w-full text-center'>
      <h4 className="uppercase text-[1.5rem] leading-8 font-bold font-sans font-custom-features">{projectName}</h4>
      <ul className="uppercase text-grey flex flex-wrap gap-2 border p-1">
        {projectTechnology.map((technology) => {
          return (
            <li className="pr-2" key={technology}>
              {technology}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectInfo;
