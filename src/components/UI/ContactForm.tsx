import React from 'react';
import BaseButton from '../Common/BaseButton';

import { BaseButtonText } from '../../models/Enums';

const ContactForm: React.FC = () => {
  return (
    <form action="submit" className="flex flex-wrap gap-y-6 ">
      <input id="name" name="name" placeholder="NAME" type="text" className="min-h-[43px]" />
      <input id="email" name="email" placeholder="EMAIL" type="text" className=" min-h-[43px]" />
      <textarea id="message" name="message" placeholder="MESSAGE" className="min-h-[107px]" />
      <BaseButton buttonText={BaseButtonText.SENDMESSAGE} position={'w-full flex justify-end'} />
    </form>
  );
};

export default ContactForm;
