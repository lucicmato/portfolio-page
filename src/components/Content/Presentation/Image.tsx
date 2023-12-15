import React from 'react';

interface ImageProps {
  image: string;
}

const Image: React.FC<ImageProps> = ({ image }) => {
  //absolute top-0 left-[830px] w-[445px] h-[720px] bg-{blackBright}} -z-[10]
  return (
    <div className="px-24 ">
      <img src={image} alt="Mato Lučić" className="" loading="lazy"/> {/* pb-[39px] */}
    </div>
  );
};

export default Image;
