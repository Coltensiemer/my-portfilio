
import React from "react";

export default function LanguageItem({title}) {
  console.log(title);
  return (
    <div>
      <div>
        {title.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </div>
    </div>
  );
}