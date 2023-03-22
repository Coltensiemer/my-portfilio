import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github.svg";

export default function ProjectItem({
  id,
  title,
  imgUrl,
  stack,
  link,
  github,
}) {

   const [isHovering, setisHovering] = React.useState(true); 

   const handleMouseOver = () => { 
      setisHovering(true); 
   }

   const handleMouseOut = () => { 
      setisHovering(false)
   }


  return (
   <>
   <div className="relative z-0 border-2 border-primary rounded-md overflow-hidden" >
    <a
     href={link}
      target="_blank"
      rel="noopener noreferrer"
      
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      </a>
      <div className="w-full p-4">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
            {title}
          </h3>
         <div className="flex  w-10 hover:-translate-y-2 hover:duration-1000" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} >
          <a href={github} alt="Link to Github" target="_blank" rel="noopener noreferrer cursor-pointer">Link
            <GitHubLogo className=" relative bottom-4 w-10 h-10 fill-black dark:fill-white"  />
          </a>
          {isHovering == true && <p className=" absolute bottom-2  text-xs dark:text-white translate-y-2 duration-700"> GitHub</p>} 
          </div> 
       
        </div>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item, id) => (
            <span
              key={id}
              className="inline-block px-2 py-1 font-semibold border-2 border-primary dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    
          </div>
    </>
  );
}
