import React from 'react';
import Link from './Link';
import data from '../../../data/data';

const LinksContainer: React.FC = () => {
  return (
    <div className="flex lg:pt-[43px]">
      {data.links.map((link, index) => (
        <Link key={index} site={link.site} url={link.url} icon={link.icon} />
      ))}
    </div>
  );
};

export default LinksContainer;
