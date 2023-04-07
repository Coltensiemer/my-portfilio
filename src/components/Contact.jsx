import React from 'react'
import { ReactComponent as Email }  from '../assets/svgs/email-outline.svg'
import Form from "./Form"


const  useElementOnScreen = (options) => {
	const containerRef = React.useRef(null);
  
	const [IsVisible, setIsVisible] = React.useState(false);
  
	const callback = (e) => {
	  const [entry] = e;
	  setIsVisible(entry.isIntersecting);
	};
  

  
	React.useEffect(() => {
	  const observer = new IntersectionObserver(callback, options);
	  if (containerRef.current) observer.observe(containerRef.current);
  
	  return () => {
		if (containerRef.current) observer.unobserve(containerRef.current);
	  };
	}, [containerRef, options]);
  
	return [containerRef, IsVisible];
  };

  

export default function Contact() {
  const [containerRef, IsVisible] = useElementOnScreen({
    root: null,
    rootMargin: "-150px 0px -100px 0px",
    threshold: 1,
  });

  return (
<div className='dark:bg-neutral py-52'>
    <p
    className={`self-start px-4 md:pb-40 text-2xl dark:text-white ${
      IsVisible ? "opacity-100 duration-300" : "opacity-30 duration-1000"
    }`}
    ref={containerRef}
  >
    Connect
  </p>
    <div className='flex flex-col justify-center py-2  md:flex-row  dark:bg-primary'>
        
      
    <div className='flex flex-col self-center md:relative md:bottom-32 md;left-0 mx-16 mb-10 md:mb-0 w-64 md:w-80 h-full dark:bg-neutral border-double border-4 border-primary dark:border-primary overflow-hidden  shadow-3xl'>
      <p className='self-start text-2xl text-primary p-6 dark:text-white'> Let's make it happen.</p>
     <ul className='flex flex-col gap-4 pl-6'>
      <li className='self-start hover:text-white dark:text-white dark:hover:text-primary'>(402)-740-3855</li>
      <li className='self-start hover:text-white dark:text-white dark:hover:text-primary'>Colten50@hotmail.com</li>
      <li className='self-start hover:text-white dark:text-white dark:hover:text-primary'>Chattanooga, Tn</li>
     </ul>
     <Email className="rotate-45 fill-black dark:fill-primary relative top-20 right-16 md:right-24" />
    </div>
    <Form />
    </div> 
    </div>
   
  )
}
