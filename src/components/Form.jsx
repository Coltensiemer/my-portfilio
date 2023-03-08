import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1eupbug', 'template_v9gk78u', form.current, '-w2anCXDO7X_ZsgpC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text) ;
      });
  };

  return (
	<div className='dark:bg-netural flex  flex flex-col  m-12 border-double border-4 border-primary dark:border-primaryrounded-r-md overflow-hidden w-96'>
    <form ref={form} onSubmit={sendEmail} className="m-0 flex flex-col justify-center gap-4 text-primary dark:bg-white dark:text-white ">
      <label className=''></label>
      <input type="text" name="user_name" className='text-black self focus:outline-primary' placeholder='First and Last Name'/>
      <label className='' ></label>
      <input type="email" name="user_email"  className='text-black focus:outline-primary' placeholder='Email'/>
      <label className=' ' ></label>
      <textarea name="message" className='h-80 overflow-scroll text-black border-2 focus:outline-primary' placeholder="Say Hello Here! "/>
      <input className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10" type="submit" value="Send" />
    </form>
	</div>
  );
};

