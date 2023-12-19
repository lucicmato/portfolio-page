import React from 'react';
import Sign from '../Common/Sign';
import LinksContainer from '../Common/Link/LinksContainer';

const Header: React.FC = () => {
  return (
    <header className="absolute flex flex-col justify-center items-center w-full gap-5 px-28 pt-5 md:flex md:flex-row md:gap-[28rem] md:px-[1.875rem]">
      <Sign />
      <LinksContainer />
    </header>
  );
};

export default Header;
