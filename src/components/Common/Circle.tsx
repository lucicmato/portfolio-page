import React from 'react';
import patternCircle from '../../assets/images/pattern-circle.svg';

interface CircleProps {
  position: string;
}
const Circle: React.FC<CircleProps> = ({ position }) => {
  return (
    <div>
      <img src={patternCircle} className={`${position}`} loading="lazy" />
    </div>
  );
};

export default Circle;
