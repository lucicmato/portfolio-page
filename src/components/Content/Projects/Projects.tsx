import React from 'react';
import ContactMeButton from '../../Common/ContactMeButton';

const Projects: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between ">
        <h1 className="">Projects</h1> {/**lg:text-hxl lg:tracking-tight font-bold leading-hxl */}
        <ContactMeButton position={''} />
      </div>
    </section>
  );
};

export default Projects;
