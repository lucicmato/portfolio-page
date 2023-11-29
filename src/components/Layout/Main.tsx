import React from 'react';
import Presentation from '../Content/Presentation/Presentation';
import Experience from '../Content/Experience/Experience';

import { experience } from '../../data/data';

const Content: React.FC = () => {
  return (
    <main>
      <Presentation />
      <Experience data={experience} />
    </main>
  );
};

export default Content;
