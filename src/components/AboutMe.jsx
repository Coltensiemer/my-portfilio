import React from "react";
import headshot from "../assets/pngs/headshot.png";
import CodeWebsites from "./CodeFetchs/CodeWebsites";

const useElementOnScreen = (options) => {
  const containerRef = React.useRef(null);

  const [IsVisible, setIsVisible] = React.useState(false);


  const callback = (e) => {
    const [entry] = e;
    setIsVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if(!containerRef.current) { 
      
 return
    }
    observer.observe(containerRef.current) 

    return ( () =>  {
    observer.disconnect()
    } 
    ) 
 
  

  
  
  

  }, [containerRef, options]);

  return [containerRef, IsVisible];
 
  
};

export default function AboutMe(props) {
  const [containerRef, IsVisible] = useElementOnScreen({
    root: null,
    rootMargin: "500px 0px 0px 0px",
    threshold: 1,
  });



  return (
    <div id="about" className="flex flex-col py-52 dark:bg-neutral ">
      <p
        className={`self-start px-4 mt-4 text-2xl dark:text-white ${
          IsVisible ? "opacity-100 duration-300 " : "opacity-0 duration-1000"
        }`}
        
      >
        About Me
      </p>
      <div className="flex bg-primary ">
        <div
          className={`m-12 md:w-96 bg-neutral border-double border-4 border-primary rounded-r-md shadow-3xl`}
        >
          <img
            src={headshot}
            alt=""
            className={`w-32 h-32 md:w-48 md:h-48 float-right relative bottom-10 left-10 rounded-full shadow-sm 
          ${IsVisible ? "opacity-100 duration-1000 " : "opacity-0 "}`}
          ref={containerRef}
          />
          <p className="p-6 text-left text-white">
            As a developer, I am constantly seeking opportunities to create
            stunning and user-friendly websites that leave a lasting impact.
            With a keen eye for design and a relentless pursuit of knowledge, I
            have honed my abilities through a combination of personal projects
            and online courses.
          </p>
        </div>
      </div>
      <div>{/* <CodeWebsites />  */}</div>
    </div>
  );
}
