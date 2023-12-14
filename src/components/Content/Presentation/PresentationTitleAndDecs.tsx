import React from 'react';
import ContactButtonMe from '../../Common/ContactMeButton';

interface PresentationTitleAndDescProps {
  developerName: string;
  description: string;
}

const PresentationTitleAndDesc: React.FC<PresentationTitleAndDescProps> = ({ developerName, description }) => {
  return (
    <div className="px-4 pt-10">
      {/*lg:ml-[165px] lg:mt-[127px] lg:mr-[569px] lg:w-[706px] lg:h-[303px]*/}

      <h1 className="text-4xl text-center -tracking-[0.071rem] font-bold">
        {/*lg:text-hxl lg:tracking-tight font-bold leading-hxl*/}
        Nice to meet you! <br></br> I'm <u className="decoration-green underline-offset-4">{developerName}</u>.
        {/*lg:underline-offset-6 */}
      </h1>
      <div className="pt-5 text-center">
        <span className="text-grey leading-[162.5%] font-medium">{description}</span>
        {/*lg:text-lg font-medium leading-7*/}
      </div>
      <ContactButtonMe position={'pt-6 w-full'} />
    </div>
  );
};

export default PresentationTitleAndDesc;
