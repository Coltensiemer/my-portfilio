import React from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "../../data/projects";

const useElementOnScreen = (options) => {
  const containerRef = React.useRef(null);

  const [IsVisible, setIsVisible] = React.useState(false);

  const callback = (e) => {
    const [entry] = e;
    setIsVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, IsVisible];
};

export default function Projects() {

  const [containerRef, IsVisible] = useElementOnScreen({
    root: null,
    rootMargin: "-150px 0px -100px 0px",
    threshold: 1,
  });


  return (
    <div
      id="projects"
      className="flex flex-col justify-between dark:bg-neutral border-none"
    >
      <p
        className={`self-start px-4 mt-4 text-2xl dark:text-white ${
          IsVisible ? "opacity-100 duration-300" : "opacity-30 duration-1000"
        }`}
        ref={containerRef}
      >
        Projects
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
