import React from 'react';

import imageMob from '../../../assets/images/Mato-profile-mobile.png';
import imageMd from '../../../assets/images/Mato-profile-tablet.png';

const Image: React.FC = () => {
  return (
    <div className="md:justify-end">
      <picture>
        <source srcSet={imageMd} media="(min-width: 768px)" />
        <img
          className="h-[383px] md:h-[600px] md:max-w-[40vw] xl:h-[720px]"
          src={imageMob}
          alt="Mato Lučić"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default Image;
