import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed psudeo pr-10 gap-4  md:gap-10 md:text-2xl lg:text-3xl bottom-0 md:top-0 left-0 right-0     w-100 md:h-24 z-0 flex justify-center md:justify-end border-t-4 md:border-t-0 md:border-b-4  border-primary text-white ">

        {[
          ["#hero", "Click to go to about me", "Back to Top"],
          ["#about", "Click to go to about me", "About Me"],
          ["#projects", "Click to go to projects", "Projects"],
          ["#form", "click to go to contact", "Contact"],
        ].map(([url, aria, title]) => (
          <button key={url}
		  className="self-center">
            <a href={url}
			className="active:text-primary cursor-pointer ">{title}</a>
          </button>
        ))}
    </nav>
  );
}
