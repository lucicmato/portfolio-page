import React from 'react';
import BaseButton from '../../Common/BaseButton';
import { BaseButtonText } from '../../../models/Enums';

interface PresentationTitleAndDescProps {
  developerName: string;
  description: string;
}

const PresentationTitleAndDesc: React.FC<PresentationTitleAndDescProps> = ({ developerName, description }) => {
  return (
    <div className="flex flex-wrap justify-center pt-10 px-4 md:px-0 md:pl-8 md:pt-[9.438rem]"> 
      {/*lg:ml-[165px] lg:mt-[127px] lg:mr-[569px] lg:w-[706px] lg:h-[303px]*/}
      <h1 className="text-center md:text-left md:w-full md:hxl">
        {/*lg:text-hxl lg:tracking-tight font-bold leading-hxl*/}
        Nice to meet you! <br className='md:hidden'/> I'm <br className='hidden md:inline-block'/><u className="decoration-green underline-offset-4">{developerName}</u>.
        {/*lg:underline-offset-6 */}
      </h1>
      <div className="pt-5 text-center md:text-left">
        <p className="md:text-left">{description}</p>
        {/*lg:text-lg font-medium leading-7*/}
      </div>
      <BaseButton position={'pt-6 w-full md:flex'} buttonText={BaseButtonText.CONTACTME} />
    </div>
  );
};

export default PresentationTitleAndDesc;
