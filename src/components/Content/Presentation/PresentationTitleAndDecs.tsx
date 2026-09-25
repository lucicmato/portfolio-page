import React, { ReactNode } from 'react';

import BaseButton from '../../Common/BaseButton';

import { BaseButtonText } from '../../../models/Enums';

interface PresentationTitleAndDescProps {
  developerName: string;
  description: ReactNode;
}

const PresentationTitleAndDesc: React.FC<PresentationTitleAndDescProps> = ({ developerName, description }) => {
  return (
    <div className="flex flex-wrap content-start justify-center pt-10 px-4 md:pr-0 md:pl-8 md:pt-20 xl:pl-0 xl:justify-start">
      <span className="text-center text-[40px] -tracking-[1.14] leading-10 font-bold md:text-left md:w-full md:text-7xl md:tracking-[2.05px] xl:font-h1 xl:text-h1 xl:tracking-h1">
        Nice to meet you! <br className="md:hidden" /> I'm <br className="hidden md:inline-block" />
        <u className="decoration-green underline-offset-4">{developerName}</u>.
      </span>
      <div className="flex w-full flex-col gap-4 pt-5 text-center md:text-left">{description}</div>
      <BaseButton increaseCss={'pt-8'} buttonText={BaseButtonText.CONTACTME} />
    </div>
  );
};

export default PresentationTitleAndDesc;
