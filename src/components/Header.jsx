import React from "react";
import Logo from "../assets/svgs/alpha-c-box.svg";

export default function Header(props) {

  return (
    <div className={`flex justify-between p-5 ${props.darkMode ? "dark" : ""}`}>
      <img className="w-10" fill="#ffffff" src={Logo} alt="Personal Logo" />
      <buttons className="dark:text-white"> Menu</buttons>
    </div>
  );
}
