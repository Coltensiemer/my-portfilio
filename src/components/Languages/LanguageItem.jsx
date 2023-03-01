import React from "react";

export default function LanguageItem({title, id }) {
  console.log(title);
  return (
    <div>
      <div>
        {title.map(item => {
          <p> {item}</p>;
        })}
      </div>
    </div>
  );
}
