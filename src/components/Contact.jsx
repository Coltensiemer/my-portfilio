import React from 'react'
import Email from '../assets/svgs/email-outline.svg'

export default function Contact() {
  return (
    <div className='flex flex-col m-12 border-double border-4 border-primary rounded-r-md" overflow-hidden'>
      <p className='self-center text-2xl text-primary p-6'> Let's make it happen.</p>
     <ul className='flex flex-col gap-4'>
      <li className='self-center'>Colten50@hotmail.com</li>
      <li className='self-center'>(402)-740-3855</li>
      <li className='self-center'>Chattanooga, Tn</li>
     </ul>
     <img className="relative w-60 rotate-45 top-10 right-10" src={Email} alt="email Icon" />
    </div>
  )
}
