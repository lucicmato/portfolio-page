import React from 'react';

import BaseButton from '../../Common/BaseButton';

import { BaseButtonText } from '../../../models/Enums';

interface ProjectImgProps {
  imgSrc: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectImg: React.FC<ProjectImgProps> = ({ imgSrc, demoLink, codeLink }) => {
  return (
    <div className="relative min-h-[253px] xl:flex xl:justify-center xl:pb-2 group">
      <img src={imgSrc} alt="image" loading="lazy" />

      <div className="xl:absolute xl:inset-0 xl:bg-black xl:opacity-0 xl:group-hover:opacity-50 xl:transition-opacity xl:duration-300" />

      <div className="xl:absolute xl:inset-0 xl:flex xl:justify-center xl:items-center xl:opacity-0 xl:hover:opacity-100 xl:transition-opacity xl:duration-300 hidden md:hidden">
        {demoLink && (
          <BaseButton buttonText={BaseButtonText.VIEWPROJECT} increaseCss="pt-5 pr-8" projectLink={demoLink} />
        )}
        {codeLink && <BaseButton buttonText={BaseButtonText.VIEWCODE} increaseCss="pt-5 pr-8" codeLink={codeLink} />}
      </div>
    </div>
  );
};

export default ProjectImg;
