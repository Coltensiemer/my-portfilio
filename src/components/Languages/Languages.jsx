import React from "react";
import LanguagesData from "../../data/languages";
import LanguageItem from "./LanguageItem";

export default function Languages() {
  // Get languages object
  // map through languages
  // return a div for each id with name

  console.log(LanguagesData);
  return (
    <div>
      <div>
        <p className="text-lg">Languages</p>
      </div>


      <div className="bg-black">
        {LanguagesData.map((lang) => {
          <LanguageItem key={lang.id} name={lang.title} />;
        })}
      </div>
    </div>
  );
}
