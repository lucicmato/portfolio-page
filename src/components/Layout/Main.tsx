import React from 'react';
import Presentation from '../Content/Presentation/Presentation';
import Experience from '../Content/Experience/Experience';
import Projects from '../Content/Projects/Projects';

import { experience } from '../../data/data';

const Content: React.FC = () => {
  return (
    <main>
      <Presentation />
      <hr className="w-[1110px] h-[1px] absolute lg:top-[824px] lg:left-[165px]" />
      <Experience data={experience} />
      {/* <Projects /> */}
    </main>
  );
};

export default Content;
