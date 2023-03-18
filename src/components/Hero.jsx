import React from "react";
import BackgroundPngDark from "../assets/svgs/MountainBg.png"
import triad  from "../assets/svgs/Triad-Space.svg"
import triadWhite from "../assets/svgs/Triad-Space-white.svg"


export default function Hero(props) {
  // For display
  const developer = `<Web Developer />`;

  

  const darkBackground = "linear-gradient(0deg, rgba(46,45,46,1) 0%, rgba(165,113,10,1) 100%)"
  const lightBackground = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(165,113,10,1) 100%)"

  const darkMode = props.darkModeTheme ? darkBackground: lightBackground


  return (
    <div className=" flex flex-col justify-center  h-screen w-screen bg-no-repeat" style={{backgroundImage: `${darkMode}`}} >
      <img src={BackgroundPngDark} className="absolute z-0 h-full w-full" />
      <div className="flex flex-col justify-center relative ">
      <h1 className="self-center text-xl text-neutral dark:text-white md:text-2xl">
        I am <br></br>
        <span className="text-6xl  md:text-8xl">Colten Siemer</span>
      </h1>
      <p className=" text-black dark:text-white opacity-50 text-2xl md:text-4xl self-center">{developer}</p>
      <button className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10">
        Let's connect
      </button>
      </div>
      {/* <div className="h-32" style={{backgroundImage: "linear-gradient(180deg, rgba(78, 77, 77, 0.3) 0%, #2E2D2E 100%)"}}></div> */}
    </div>
  );
}