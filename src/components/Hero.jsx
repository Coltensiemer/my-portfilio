import React from "react";

export default function Hero() {
  // For display
  const developer = `<Web Developer />`;

  return (
    <div className="flex flex-col justify-center bg-slate-500 h-96">
      <h1 className="self-center">
        I am <br></br>
        <span className="text-3xl">Colten Siemer</span>
      </h1>
      <p className="text-lg self-center">{developer}</p>
      <button className="bg-primary w-32 p-2 rounded-lg text-white self-center m-10">
        Let's connect
      </button>
    </div>
  );
}
