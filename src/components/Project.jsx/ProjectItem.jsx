import React, { useState, useEffect } from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github.svg";


export default function ProjectItem({
  id,
  title,
  imgUrl,
  stack,
  link,
  github,
  description,
  isHovering,
  hidden,
  handleMouseOut,
  handleMouseOver,
}) {
  const [isHidden, setHidden] = useState(false);

  function controlHidden() {
    setHidden((e) => !e);
  }

  const descriptionOptions =
    isHidden === true ? "Close Description" : "Click for Description";

  return (
    <div className="">
      <div className="relative w-64 h-100 z-0 border-2 border-primary rounded-md overflow-hidden shadow-3xl">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="">
          <img
            src={imgUrl}
            alt="portfolio"
            className="w-full h-36 md:h-48 object-cover cursor-pointer border-bottom-2 border-bottom-primary"
          />
        </a>
        <div className="w-full p-4">
          <div className="flex justify-between">
            <h3 className="text-lg py-4  md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
              {title}
            </h3>
            <div
              className="flex  w-10 hover:-translate-y-2 hover:duration-1000"
            
            >
              <a
                aria-label="Link to GitHub"
                href={github}
                alt=""
                target="_blank"
                rel="noopener noreferrer cursor-pointer"
              >
                <GitHubLogo className=" relative  w-8 h-8 lg:w-10 lg:h-10 fill-black dark:fill-white" />
              </a>
            </div>
          </div>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
            {stack.map((item, id) => (
              <span
                key={id}
                className="inline-block px-2 py-1 font-semibold border-2 border-primary  rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
        <div className="flex flex-col gap-4 h-auto">
          <button className="btn  self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-2 ease-in-out duration-700">
            <a
              href={link}
              alt="Link to Github"
              target="_blank"
              rel="noopener noreferrer cursor-pointer"
            >
              {" "}
              Live Preview
            </a>
          </button>
          <button
            className=" btn self-center bg-white text-primary hover:text-white hover:bg-primary mb-2 w-36 ease-in-out duration-700"
            onClick={controlHidden}
          >
            {descriptionOptions}
          </button>
        </div>
      </div>
      <div>
       {/* For each div, opens Description when clicked on button above */}
        {isHidden === true && (
          <p className="text-white  p-4 m-auto text-xs w-64 md:w-100 md:text-sm  bg-primary " key={id}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
