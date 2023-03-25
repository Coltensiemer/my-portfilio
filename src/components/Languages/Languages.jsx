import React from "react";
import StackData from "../../data/stack";




export default function Stack() {
  return (

    <div className=" flex flex-col p-4 pb-40 dark:bg-neutral">
    
        <h2 className="align-center text-4xl text-center py-4 mt-10 m-auto dark:text-white">
          Stack
        </h2>

     
        {/* Each Item */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 ">
          {StackData.map((language) => (
            <div
              className="flex flex-col m-0 w-22 p-2 border-4 border-double border-primary round-md  lg:h-52  dark:bg-primary shadow-3xl"
              key={language.id}
            >
              <img
                className="self-center w-16 md:w-24 lg:w-32"
                src={language.stack}
                alt=""
              />
              <h3 className="text-center lg:text-2xl m-4 dark:text-white">
                {language.title}{" "}
              </h3>
            </div>
          ))}
        </ul>
      </div>
   
    
    
  );
}
