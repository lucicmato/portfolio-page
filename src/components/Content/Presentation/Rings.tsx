import React from 'react';

import patternRings from '../../../assets/images/pattern-rings.svg';

interface RingsProps {
  position: string;
}
const Rings: React.FC<RingsProps> = ({ position }) => {
  return (
    <div>
      <img src={patternRings} className={position} />
    </div>
  );
};

export default Rings;
