import React from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "../../data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <p className="self-end px-4 mt-4 text-2xl opacity-30">Projects</p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <ProjectItem
              key={project.title}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
