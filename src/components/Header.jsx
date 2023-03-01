import React from "react";
import Logo from "../assets/svgs/alpha-c-box.svg";

export default function Header() {

  return (
    <div className="flex justify-between p-5">
      <img className="w-10" src={Logo} alt="Personal Logo" />
      <button> Menu</button>
    </div>
  );
}
