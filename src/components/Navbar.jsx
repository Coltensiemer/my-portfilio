import React from 'react'

export default function Navbar() {
  return (
	<nav className='fixed bottom-0 left-0 right-0 align-center bg-white w-100 flex justify-around border-t-4 border-primary dark:text-white dark:bg-neutral'>
		<ul className='flex gap-10 h-100 p-2 text-xs md:text-xl lg:text-3xl' >
			<li><a  href="#hero" aria-label="Click to go to top">Back to Top </a></li>
			<li><a href="#about" aria-label="Click to go to about me"> About Me</a></li>
			<li><a href="#projects" aria-label="Click to go to projects">Projects </a></li>
			<li><a href="#form" aria-label="Click to go to contact form">Contact</a></li>
		</ul>
	</nav>
  )
}
