import React, { useState } from 'react';
import BaseButton from '../Common/BaseButton';

import { BaseButtonText } from '../../models/Enums';
import { FormData } from '../../models/Models';
import { eMail } from '../../data/data';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', message: '', name: '' });
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const submitMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const mailtoLink = `mailto:${eMail}?subject=Message from ${encodeURIComponent(
      formData.name,
    )}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(
      formData.email,
    )}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;

    setButtonClicked(true);
    //reset
    setFormData({ email: '', message: '', name: '' });

    window.location.href = mailtoLink;
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={submitMessage} className="flex flex-wrap gap-y-6">
      <input
        id="name"
        name="name"
        placeholder="NAME"
        type="text"
        className="min-h-[43px]"
        value={formData.name}
        onChange={onInputChange}
        required
      />
      <input
        id="email"
        name="email"
        placeholder="EMAIL"
        type="text"
        className=" min-h-[43px]"
        value={formData.email}
        onChange={onInputChange}
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="MESSAGE"
        className="min-h-[107px]"
        value={formData.message}
        onChange={onInputChange}
        required
      />
      <BaseButton buttonText={BaseButtonText.SENDMESSAGE} increaseCss={'w-full flex justify-end'} />
      {buttonClicked && (
        <span className="border bg-green bg-gray-900">
          <b>Thank you for the interest!</b> Your message has been successfully submitted and forwarded to your internal
          mail system. Please feel free to send it from your preferred email application. 😊
        </span>
      )}
    </form>
  );
};

export default ContactForm;
