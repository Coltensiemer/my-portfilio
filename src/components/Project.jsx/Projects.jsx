import React from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "../../data/projects";

export default function Projects() {
  const [state, setState] = React.useState();
  // Handle State for hover Effect
  const [isHovering, setisHovering] = React.useState(false);
  const handleMouseOver = () => {
    setisHovering(true);
  };
  const handleMouseOut = () => {
    setisHovering(false);
  };

  return (
    <div className="flex flex-col justify-between dark:bg-neutral border-none">
      <p className="self-end px-4 pb-10 mt-10 text-2xl opacity-30 dark:text-white">
        Projects
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              isHovering={isHovering}
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
