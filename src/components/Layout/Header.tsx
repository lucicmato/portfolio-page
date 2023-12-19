import React from 'react';
import Sign from '../Common/Sign';
import LinksContainer from '../Common/Link/LinksContainer';

const Header: React.FC = () => {
  return (
    <header className="absolute flex flex-col justify-center items-center w-full gap-5 px-28 pt-5">
      <Sign />
      <LinksContainer />
    </header>
  );
};

export default Header;
