import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 md:top-0 left-0 right-0   bg-white w-100 md:h-24 z-0 flex justify-center md:justify-end border-t-4 md:border-t-0 md:border-b-4 border-primary dark:text-white dark:bg-neutral">
      <ul className="flex gap-10 h-100 p-2 text-xs md:text-xl lg:text-3xl">
        <li>
          <a
            href="#hero"
            aria-label="Click to go to top"
            className="hover:text-primary"
          >
            Back to Top{" "}
          </a>
        </li>
        <li>
          <a href="#about" aria-label="Click to go to about me">
            {" "}
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" aria-label="Click to go to projects">
            Projects{" "}
          </a>
        </li>
        <li>
          <a href="#form" aria-label="Click to go to contact form">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
