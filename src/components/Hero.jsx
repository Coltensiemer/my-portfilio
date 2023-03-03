import React from "react";
import triad from "../assets/svgs/Triad-Space.svg"

export default function Hero() {
  // For display
  const developer = `<Web Developer />`;

  return (
    <div className="flex flex-col justify-center text-white h-96" style={{backgroundImage: `url(${triad})`}} >
      <h1 className="self-center text-xl md:text-2xl ">
        I am <br></br>
        <span className="text-6xl md:text-8xl">Colten Siemer</span>
      </h1>
      <p className="text-2xl md:text-4xl self-center">{developer}</p>
      <button className="btn self-center bg-primary text-white hover:text-primary hover:bg-white w-36 m-10">
        Let's connect
      </button>
    </div>
  );
}
