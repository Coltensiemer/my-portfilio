import React, { useState, useEffect } from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github.svg";
import Card from "../CardWrapper/CardWrapper";
import {gitHubFetch} from '../../javascript/githubAPI.js'
import Popup from "reactjs-popup";

export default function ProjectItem({
  id,
  title,
  imgUrl,
  stack,
  link,
  github,
  description,
  readme,
  repo,
  branch
  
}) {


  const [readmeData, setReadmeData] = useState("World")
  // function controlHidden() {
  //   setHidden((e) => !e);
  // }

  const handlegitHubAPI = (repo="dictionary-web-app", branch="master") => {
    console.log("first")
    // setOpen((o) => !o)
    console.log("clicked")
    gitHubFetch(repo, branch);
    console.log("clicked")
    
  };

  const [isOpen, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <Card>
      <div className=" opacity-75 md:opacity-50 hover:opacity-100 bg-neutral-3">
        <div className="relative w-64 h-100 pb-6 z-0 overflow-hidden shadow-3xl">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label=""
          >
            <img
              src={imgUrl}
              alt="portfolio"
              className="container h-42  p-2 object-cover cursor-pointer border-bottom-2 border-bottom-primary"
            />
          </a>
          <div className="w-full p-4">
            <div className="flex justify-between">
              <h3 className="text-lg py-4  md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
                {title}
              </h3>
              <div className="flex  w-10 hover:-translate-y-2 hover:duration-1000">
                <a
                  aria-label="Link to GitHub"
                  href={github}
                  alt=""
                  target="_blank"
                  rel="noopener noreferrer"
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

            <Popup
              trigger={
                <button
                  type="button"
                  className="btn  self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-2 ease-in-out duration-700"
                  onClick={handlegitHubAPI}
                >
                  ReadMe!
                </button>
              }
            >
              {(close) => (
                <div className=" fixed mx-5 p-2 top-1/2 left-0 bg-primary ">
                  <p>{readmeData}</p>
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                </div>
              )}
            </Popup>
            <div></div>
          </div>
        </div>
      </div>
    </Card>
  );
}
