import React from 'react';

import Presentation from '../Content/Presentation/Presentation';
import Experience from '../Content/Experience/Experience';
import Projects from '../Content/Projects/Projects';
import Contact from '../Content/Contact/Contact';

import { coreStack, otherStack, projects } from '../../data/data';

const Content: React.FC = () => {
  return (
    <>
      <main className="xl:pr-40 xl:pl-40">
        <Presentation />
        <Experience core={coreStack} other={otherStack} />
        <Projects projects={projects} />
      </main>
      <Contact />
    </>
  );
};

export default Content;
