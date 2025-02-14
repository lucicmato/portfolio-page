import React from 'react';

import ContactForm from '../../UI/ContactForm';
import Rings from '../../Common/Rings';
import useMyContext from '../../../hooks/useMyContext';

const Contact: React.FC = () => {
  const { refConnectSection } = useMyContext();

  return (
    <section ref={refConnectSection} className="bg-blackBright px-4 pt-16" tabIndex={-1}>
      <h2 className="font-bold text-center md:text-7xl">Contact</h2>
      <p className="text-center pt-5 md:px-40">
        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you
        as soon as possible.
      </p>
      <div className="pt-[3.125rem] pb-[6rem] md:px-40">
        <ContactForm />
        <Rings position={'absolute right-[calc(100vw-45%)] z-[1] md:right-[calc(100vw-25%)]'} />
      </div>
      <hr />
    </section>
  );
};

export default Contact;
