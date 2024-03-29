import React from 'react';
import headshot from '../assets/pngs/headshot.png';
import CodeWebsites from './CodeFetchs/CodeWebsites';

const useElementOnScreen = (options) => {
  const containerRef = React.useRef(null);

  const [IsVisible, setIsVisible] = React.useState(false);

  const callback = (e) => {
    const [entry] = e;
    setIsVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (!containerRef.current) {
      return;
    }
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, options]);

  return [containerRef, IsVisible];
};

export default function AboutMe(props) {
  const [containerRef, IsVisible] = useElementOnScreen({
    root: null,
    rootMargin: '500px 0px 0px 0px',
    threshold: 1,
  });

  return (
    <div id='about' className='flex flex-col  py-52 dark:bg-neutral '>
      <p
        className={`self-start px-4 mt-4 text-2xl dark:text-white 
        `}
      >
        About Me
      </p>
      <div className='flex bg-primary '>
        <div
          className={`m-12 md:w-6/12 bg-neutral border-double border-4 border-primary rounded-r-md shadow-3xl`}
        >
          <img
            src={headshot}
            alt=''
            className={`w-32 h-32 md:w-48 md:h-48 float-right relative bottom-10 left-10 rounded-full shadow-sm 
          ${IsVisible ? 'opacity-100 duration-1000 ' : 'opacity-0 '}`}
            ref={containerRef}
          />
          <p className='p-6 sm:text-2xl md:text-3xl  text-left text-white'>
          As a career changer transitioning into software development, I am a self-taught, motivated individual with a passion for learning, problem-solving, and teamwork. Through numerous personal projects and rigorous online courses, I've learned technical skills including React, TypeScript, GIT, AWS, and more.
          </p>
        </div>
      </div>
      {/* <div><CodeWebsites /> </div> */}
    </div>
  );
}
