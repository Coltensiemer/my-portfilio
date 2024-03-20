import React from 'react'
import additonalSkill from '../data/additonalSkill';

export default function AdditionalSkills() {
  return (
    <div className=" flex flex-col p-4 pb-40 dark:bg-neutral">
      <h2 className=" text-4xl self-start py-4 mt-2 m-auto dark:text-white">
        Additional Skills
      </h2>

      {/* Each Item */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 ">
        {additonalSkill.map((skill) => (
          <div
            className="flex flex-col m-0 w-22 p-2 border-4 border-double border-primary round-md  lg:h-24  dark:bg-primary shadow-3xl"
            key={skill.id}
          >
            <h3 className="text-center lg:text-2xl m-4 dark:text-white">
              {skill.title}{" "}
            </h3>
          </div>
        ))}
      </ul>
    </div>
		);
	  }
