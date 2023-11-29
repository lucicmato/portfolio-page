import React from 'react';
import data from '../../../data/data';

interface PresentationTitleAndDescProps {
  developerName: string;
}

const PresentationTitleAndDesc: React.FC<PresentationTitleAndDescProps> = ({ developerName }) => {
  return (
    <div className="lg:ml-[165px] lg:mt-[127px] lg:mr-[569px] lg:w-[706px] lg:h-[303px]">
      <h1 className="lg:text-hxl lg:tracking-tight font-bold leading-hxl">
        Nice to meet you! <br></br> I'm <u className="lg:underline-offset-6 decoration-green">{developerName}</u>.
      </h1>

      <div className="lg:mt-[37px] lg:mr-[261px]">
        <span className="lg:text-lg font-medium leading-7">{data.representation.description}</span>
      </div>
    </div>
  );
};

export default PresentationTitleAndDesc;
