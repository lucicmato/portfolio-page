import React from 'react';

interface LinkProps {
  site: string;
  url: string;
  icon: string;
}

const Link: React.FC<LinkProps> = ({ site, url, icon }) => {
  return (
    <div className="lg:pr-[25px]">
      <a href={url}>
        <img src={icon} alt={site} />
      </a>
    </div>
  );
};

export default Link;
