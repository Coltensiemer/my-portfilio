import React from 'react';
import { ReactComponent as Email } from '../assets/svgs/email-outline.svg';
import Form from './Form';

export default function Contact() {
  return (
    <div className='dark:bg-neutral  py-32' id='form'>
      <p className={`self-start px-4 md:pb-40 text-2xl dark:text-white`}>
        Connect
      </p>
      <div className='flex flex-col justify-center py-2  md:flex-row  bg-primary'>
        <div className='flex flex-col self-center md:relative md:bottom-32 md:left-0 mx-16 mb-10 md:mb-0 w-80 md:w-80 h-full bg-white dark:bg-neutral border-double border-4 border-primary dark:border-primary overflow-hidden  shadow-3xl'>
          <p className='self-start text-2xl text-primary p-6 dark:text-white'>
            {' '}
            Let's make it happen.
          </p>
          <ul className='flex flex-col gap-4 pl-6'>
            <li className='self-start hover:text-primary dark:text-white dark:hover:text-primary'>
              (402)-740-3855
            </li>
            <li className='self-start hover:text-primary dark:text-white dark:hover:text-primary'>
              Colten50@hotmail.com
            </li>
            <li className='self-start hover:text-primary dark:text-white dark:hover:text-primary'>
              Chattanooga, Tn
            </li>
          </ul>
          <Email className='rotate-45 fill-black dark:fill-primary relative top-20 right-16 md:right-24' />
        </div>
        <Form />
      </div>
    </div>
  );
}
