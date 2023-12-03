import React from 'react';
import ContactMeButton from '../../Common/ContactMeButton';

const Projects: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between ">
        <h1 className="lg:text-hxl lg:tracking-tight font-bold leading-hxl">Projects</h1>
        <ContactMeButton />
      </div>
    </section>
  );
};

export default Projects;
