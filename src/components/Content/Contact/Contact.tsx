import React from 'react';
import ContactForm from '../../UI/ContactForm';
import Rings from '../../Common/Rings';

const Contact: React.FC = () => {
  return (
    <section className="bg-blackBright px-4 pt-[3.75em]">
      <h1>Contact</h1>
      <p className="text-center pt-5">
        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you
        as soon as possible.
      </p>
      <div className="pt-[3.125rem] pb-[6.1875rem]">
        <ContactForm />
      </div>
      <Rings position={'absolute right-48 end-[318px] z-[1]'} />
      <hr />
    </section>
  );
};

export default Contact;
