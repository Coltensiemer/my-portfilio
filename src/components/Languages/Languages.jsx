import React from "react";
import LanguagesData from "../../data/languages";
import LanguageItem from "./LanguageItem";

export function Frameworks() {
  return (
    <>
      <h2>Frameworks</h2>
      <h3>Hello! </h3>
    </>
  );
}

export default function Languages() {
  return (
    <div className=" flex flex-col m-4">
      <Frameworks />
      <h2 className="align-center text-center border-2 border-primary w-6/12">
        Languages:
      </h2>
      <ul className="flex justify-center items-center gap-4">
        {LanguagesData.map((language) => (
          <div
            className="text-red-500 border-2 border-primary round-md w-40 h-25"
            key={language.title}
          >
            <img
              className="p-4"
              src={language.stack}
              alt={`${language.title} logo`}
            />
            <h3 className="text-center">{language.title} </h3>
          </div>
        ))}
      </ul>
    </div>
  );
}
