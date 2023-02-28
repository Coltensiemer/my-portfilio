import React from "react";
import languagesData from "../data/languages";
import LanguageItem from "./LanguageItem";

export default function Languages(props) {
  // Get languages object
  // map through languages
  // return a div for each id with name

  return (
    <div>
      <div>
        <p className="text-red-400">lang</p>
      </div>

      <div className="bg-black">
        {languagesData.map(lang => {
          <LanguageItem  
          name={lang} />
})}
      </div>
    </div>
  );
 
}
