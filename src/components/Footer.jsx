import React from 'react';
import { ReactComponent as Github } from '../assets/svgs/github.svg';
import { ReactComponent as Linkedin } from '../assets/svgs/linkedin.svg';

export default function Footer() {
  return (
    <div className='flex justify-between dark:bg-neutral pt-20 pb-10 px-5 md:px-10 lg-pb-5 '>
      <div className=' flex flex-col'>
        <p className='text-black opacity-50 dark:text-white'>
          Thanks for Visiting!
        </p>
        <p className='text-sm mt-2  opacity-50 dark:text-white'>
          &copy; {new Date().getFullYear()} Colten Siemer. All rights reserved.
        </p>
      </div>
      <div className=' flex '>
        <ul className='flex'>
          <li className='self-center pr-10'>
            <a href='https://github.com/Coltensiemer'>
              <Github className='relative  w-6 h-6 md:width-8 md:height-8 lg:w-10 lg:h-10 dark:fill-primary' />
            </a>
          </li>
          <li className='self-center'>
            <a href='https://www.linkedin.com/in/colten-siemer/'>
              <Linkedin className='relative  w-4 h-4 lg:w-10 lg:h-10 dark:fill-primary' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
