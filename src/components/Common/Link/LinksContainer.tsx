import React from 'react';
import Link from './Link';
import data from '../../../data/data';

const LinksContainer: React.FC = () => {
  return (
    <div className="w-full flex justify-between md:justify-evenly">
      {data.links.map((link, index) => (
        <Link key={index} site={link.site} url={link.url} icon={link.icon} />
      ))}
    </div>
  );
};

export default LinksContainer;
