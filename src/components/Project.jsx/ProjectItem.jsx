import React from 'react'
import { ReactComponent as GitHubLogo }  from '../../assets/svgs/github-mark-white.svg'

export default function ProjectItem({title, imgUrl, stack, link }) {

        return (
         
           <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary dark:border-white rounded-md overflow-hidden"
           >
              <img
                 src={imgUrl}
                 alt="portfolio" 
                 className="w-full h-36 md:h-48 object-cover cursor-pointer"
              />
              <div className="w-full p-4">
               <div className='flex justify-between'>
                 <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
                 <GitHubLogo
                 className="relative top-0 w-20"
                 fill="red"
                 stroke="black"
                
                 />
                 </div>
                 <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                    {stack.map(item => (
   
                       <span className="inline-block px-2 py-1 font-semibold border-2 border-primary dark:border-white rounded-md">
                          {item}
                       </span>
                    ))}
                 </p>
              </div>
           </a>
        )
     }
  
  

