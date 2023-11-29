import React from 'react';
import image from '../../../assets/images/image-profile-desktop.webp';

const PresentationImage: React.FC = () => {
  return (
    <div className="absolute top-0 left-[830px] w-[445px] h-[720px] bg-{blackBright}} -z-[10]">
      <img src={image} alt="Mato Lučić" className="pb-[39px]" />
    </div>
  );
};

export default PresentationImage;
