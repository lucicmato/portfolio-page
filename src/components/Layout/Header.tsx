import React from 'react';
import Sign from '../Content/Sign';
import LinksContainer from '../Content/Link/LinksContainer';

const Header: React.FC = () => {
  return (
    <header className="absolute flex flex-col justify-center items-center w-full gap-5 px-28 pt-5 overflow-x-hidden">
      <Sign />
      <LinksContainer />
    </header>
  );
};

export default Header;
