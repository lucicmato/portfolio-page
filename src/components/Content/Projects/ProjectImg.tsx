import React from 'react';

interface ProjectImgProps {
  imgSrc: string;
}

const ProjectImg: React.FC<ProjectImgProps> = ({ imgSrc }) => {
  return (
    <div className="min-h-[253px]">
      <img src={imgSrc} alt="CPI Handler" loading="lazy" />
    </div>
  );
};

export default ProjectImg;
