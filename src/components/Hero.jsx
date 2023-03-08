import React from "react";
import triad from "../assets/svgs/Triad-Space.svg"
import triadWhite from "../assets/svgs/Triad-Space-white.svg"


export default function Hero(props) {
  // For display
  const developer = `<Web Developer />`;

  const darkMode = props.darkModeTheme ? triad : triadWhite;


console.log(darkMode)
  return (
    <div className=" flex flex-col justify-center border-white h-96" style={{backgroundImage: `url(${darkMode})`}} >
      <div className="flex flex-col justify-center ">
      <h1 className="self-center text-xl text-primary dark:text-white md:text-2xl">
        I am <br></br>
        <span className="text-6xl  md:text-8xl">Colten Siemer</span>
      </h1>
      <p className=" text-black dark:text-white opacity-50 text-2xl md:text-4xl self-center">{developer}</p>
      <button className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10">
        Let's connect
      </button>
      </div>
    </div>
  );
}
