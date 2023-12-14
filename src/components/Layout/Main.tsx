import React from 'react';
import Presentation from '../Content/Presentation/Presentation';
import Experience from '../Content/Experience/Experience';
import Projects from '../Content/Projects/Projects';

import { experience } from '../../data/data';

const Content: React.FC = () => {
  return (
    <main>
      <Presentation />
      <Experience data={experience} />
      <Projects />
      {/* <ContactForm /> */}
    </main>
  );
};

export default Content;
