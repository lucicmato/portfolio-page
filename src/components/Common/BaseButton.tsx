import React from 'react';

import useMyContext from '../../hooks/useMyContext';

import { BaseButtonText } from '../../models/Enums';

interface ContactMeButtonProps {
  buttonText: string;
  increaseCss?: string;
  codeLink?: string;
  projectLink?: string;
}

const BaseButton: React.FC<ContactMeButtonProps> = ({ increaseCss, buttonText, codeLink, projectLink }) => {
  const { refConnectSection } = useMyContext();
  return (
    <button
      className={`${increaseCss} font-bold leading-[26px] tracking-[2.29px] text-[16px] z-10`}
      type={buttonText === BaseButtonText.SENDMESSAGE ? 'submit' : 'button'}
      onClick={() => {
        buttonText === BaseButtonText.CONTACTME && refConnectSection.current?.focus();
        buttonText === BaseButtonText.VIEWCODE && window.open(codeLink);
        buttonText === BaseButtonText.VIEWPROJECT && window.open(projectLink);
      }}
    >
      <u className="decoration-green underline-offset-[6px] active:text-green ">{buttonText}</u>
    </button>
  );
};

export default BaseButton;
