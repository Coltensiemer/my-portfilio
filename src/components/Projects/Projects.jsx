import React from 'react';
import ProjectItem from './ProjectItem';
import projectsData from '../../data/projects';

export default function Projects() {
  return (
    <div
      id='projects'
      className='flex flex-col justify-between pt-24 dark:bg-neutral border-none'
    >
      <p
        className={`self-start p-4 mt-4 text-2xl dark:text-white 
        `}
      >
        Projects
      </p>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10'>
          {projectsData.map((project) => (
            <ProjectItem
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              github={project.github}
              description={project.description}
              hidden={project.hidden}
              gifUrl={project.gifUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
