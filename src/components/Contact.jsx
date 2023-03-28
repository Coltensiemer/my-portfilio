import React from 'react'
import { ReactComponent as Email }  from '../assets/svgs/email-outline.svg'
import Form from "./Form"

export default function Contact() {
  return (
    <div className='flex flex-col justify-center md:flex-row pt-24 dark:bg-neutral'>
        
      
    <div className='flex flex-col self-center mx-16 mb-10 md:mb-0 w-64 md:w-80 h-full border-double border-4 border-primary dark:border-primary rounded-r-md" overflow-hidden  shadow-3xl'>
      <p className='self-center text-2xl text-primary p-6 dark:text-white'> Let's make it happen.</p>
     <ul className='flex flex-col gap-4 '>
      <li className='self-center hover:text-white dark:text-white dark:hover:text-primary'>Colten50@hotmail.com</li>
      <li className='self-center hover:text-white dark:text-white dark:hover:text-primary'>(402)-740-3855</li>
      <li className='self-center hover:text-white dark:text-white dark:hover:text-primary'>Chattanooga, Tn</li>
     </ul>
     <Email className="rotate-45 fill-black dark:fill-primary relative top-20 right-16 md:right-24" />
    </div>
    <Form />
    </div> 
   
  )
}
