import React from 'react';
import AdditionalProjectsItems from './AdditionalProjectsItems';
import additionalProjects from '../../data/additionalProjects';

export default function AdditionalProjects() {
  return (
    <div
      id='projects'
      className='flex flex-col justify-between pt-24 dark:bg-neutral border-none'
    >
      <p
        className={`self-start p-4 my-4 text-2xl dark:text-white 
        `}
      >
      Additonal Projects in the Works...
      </p>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {additionalProjects.map((project) => (
            <AdditionalProjectsItems
              key={project.id}
              title={project.title}
              stack={project.stack}
              link={project.link}
              github={project.github}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
