import React from 'react';
import Sign from '../Common/Sign';
import LinksContainer from '../Common/Link/LinksContainer';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-5 items-center m-6 md:flex-row xl:mr-40 xl:ml-40">
      <Sign />
      <LinksContainer />
    </header>
  );
};

export default Header;
