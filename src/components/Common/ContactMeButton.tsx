import React from 'react';

interface ContactMeButtonProps {
  position?: string;
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({ position }) => {
  return (
    //lg:ml-[165px] lg:mt-[66px]
    <button className={`${position} font-bold leading-[162.5%] tracking-[0.1429]`}>
      <u className="underline-offset-[18px] active:text-green decoration-green">CONTACT ME</u>
    </button>
  );
};

export default ContactMeButton;
