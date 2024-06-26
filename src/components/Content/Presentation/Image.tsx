import React from 'react';

import imageMob from '../../../assets/images/Mato-profile-mobile.png';
import imageMd from '../../../assets/images/Mato-profile-tablet.png';
import imageXl from '../../../assets/images/Mato-profile-desktop.png';

const Image: React.FC = () => {
  return (
    <div className="flex justify-center pt-10 md:justify-end ">
      <picture className=' h-full'>
        <source srcSet={imageXl} media="(min-width: 1280px)" />
        <source srcSet={imageMd}  media="(min-width: 768px)" />
        <img className="h-[383px] md:h-[600px] md:max-w-[40vw]" src={imageMob} alt="Mato Lučić" loading="lazy" />
      </picture>
    </div>
  );
};

export default Image;
