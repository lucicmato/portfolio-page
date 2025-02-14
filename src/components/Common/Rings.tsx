import React from 'react';

import patternRings from '../../assets/images/pattern-rings.svg';

interface RingsProps {
  position: string;
}

const Rings: React.FC<RingsProps> = ({ position }) => {
  return <img src={patternRings} alt="ring" className={position} loading="lazy" />;
};

export default Rings;
