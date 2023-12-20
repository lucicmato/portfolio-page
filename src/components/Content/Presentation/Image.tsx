import React from 'react';

import imageMob from '../../../assets/images/image-profile-mobile.webp';
import imageMd from '../../../assets/images/image-profile-tablet.webp';
import imageXl from '../../../assets/images/image-profile-desktop.webp';

const Image: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <picture>
        <source srcSet={imageXl} media="(min-width: 1280px)" />
        <source srcSet={imageMd} media="(min-width: 768px)" />
        <img className="h-[383px] md:h-[600px]" src={imageMob} alt="Mato Lučić" loading="lazy" />
      </picture>
    </div>
  );
};

export default Image;
