import React from "react";
import LanguagesData from "../../data/languages";
import FrameworkData from "../../data/frameworks";


// This Handles Framworks and Libraires - imported into Lang 
export function Frameworks() {
  return (
    <div className="flex flex-col">
      <h2 className="align-center text-4xl text-center py-4 mt-10 m-auto">
        Frameworks and Libraries
      </h2>
      <ul className="grid grid-cols-3 grid-flow-rowjustify-center items-center gap-4">
        {FrameworkData.map((language) => (
          <div
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 border-2 border-primary round-md  h-25  md:h-40 lg:h-52"
            key={language.id}
          >
            <img
              className="p-4"
              style={{fill: "red"}}
              src={language.stack}
              alt=""
            />
            <h3 className="text-center m-4 self-center">{language.title} </h3>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default function Languages() {
  return (
    <div className=" flex flex-col md:flex-col lg:flex-row justify-around m-4 pb-40">
      <div className="flex flex-col">
        <h2 className="align-center text-4xl text-center py-4 mt-10 m-auto">
          Languages
        </h2>
        <ul className="grid grid-cols-3 grid-flow-row justify-center gap-4">
          {LanguagesData.map((language) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 border-2 border-primary round-md  h-25 md:h-40 lg:h-52"
              key={language.id}
            >
              <img
                className="p-4"
                src={language.stack}
                alt=""
              />
              <h3 className="text-center self-center m-4 ">
                {language.title}{" "}
              </h3>
            </div>
          ))}
        </ul>
      </div>
      <Frameworks />
    </div>
  );
}
