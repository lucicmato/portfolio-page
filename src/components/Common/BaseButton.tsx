import React from 'react';

interface ContactMeButtonProps {
  buttonText: string;
  position?: string;
}

const BaseButton: React.FC<ContactMeButtonProps> = ({ position, buttonText }) => {
  return (
    //lg:ml-[165px] lg:mt-[66px]
    <button className={`${position} font-bold leading-[162.5%] tracking-[0.1429]`}>
      <u className="underline-offset-[18px] active:text-green decoration-green">{buttonText}</u>
    </button>
  );
};

export default BaseButton;
