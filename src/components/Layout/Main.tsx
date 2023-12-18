import React from 'react';
import Presentation from '../Content/Presentation/Presentation';
import Experience from '../Content/Experience/Experience';
import Projects from '../Content/Projects/Projects';
import Contact from '../Content/Contact/Contact';

import { experience, projects } from '../../data/data';

const Content: React.FC = () => {
  return (
    <main>
      <Presentation />
      <Experience data={experience} />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
};

export default Content;
