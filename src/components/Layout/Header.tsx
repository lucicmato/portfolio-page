import React from 'react';
import Sign from '../Content/Sign';
import LinksContainer from '../Content/Link/LinksContainer';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between lg:pl-[165px] lg:pr-[195px]">
      <Sign />
      <LinksContainer />
    </header>
  );
};

export default Header;
