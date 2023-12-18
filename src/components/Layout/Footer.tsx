import React from 'react';
import Sign from '../Common/Sign';
import LinksContainer from '../Common/Link/LinksContainer';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-5 bg-blackBright pt-[2.4375em] pb-[3.75rem] px-28">
      <Sign />
      <LinksContainer />
    </footer>
  );
};

export default Footer;
