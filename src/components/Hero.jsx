import React from "react";
import {ReactComponent as DownArrow }  from '../assets/svgs/arrow-down-bold-circle-outline.svg'

export default function Hero(props) {
  // For display
  const developer = `<Web Developer />`;

  const darkBackground =
    "linear-gradient(0deg, rgba(46,45,46,1) 26%, rgba(119,119,119,1) 100%)";
  const lightBackground =
    "linear-gradient(0deg, rgba(255,255,255,1) 24%, rgba(255,252,252,1) 72%)";

  // "linear-gradient(0deg, rgba(46,45,46,1) 0%, rgba(165,113,10,1) 100%)

  const darkMode = props.darkModeTheme ? darkBackground : lightBackground;

  return (
    <div
      id="hero"
      className=" flex flex-col justify-center  h-screen w-screen bg-no-repeat ease-in"
      style={{ backgroundImage: `${darkMode}` }}
    >
      <div className="flex  justify-center bg-hero h-screen w-screen  backgroundImage">
        <div className="flex flex-col justify-center relative ">
          <h1 className="self-center text-xl text-neutral dark:text-white md:text-2xl animate-slide-in-name">
            I am <br></br>
            <span className="text-6xl  md:text-8xl ">Colten Siemer</span>
          </h1>
          <p className=" text-black dark:text-white opacity-80 text-2xl md:text-4xl self-center animate-slide-in-title">
            {developer}
          </p>
          <button className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10 animate-slide-in-button">
            <a href="#form" aria-label="Go to contact form section ">
              {" "}
              Let's connect
            </a>
          </button>
          <a alt="Click to view next section" className="self-center delay-1000" href="#about" >
            <DownArrow  className="relative top-10 fill-neutral dark:fill-white w-10 h-10  animate-bounce animate-slide-in-arrow animate-bounce cursor-pointer"  /> 
            </a> 
        </div>
      </div>
    </div>
  );
}
