import React from "react";
import { ReactComponent as Logo } from "../assets/svgs/alpha-c-box.svg";

export default function Header(props) {

  return (
    <div className={`flex justify-between p-5 dark:bg-neutral`}>
      <Logo className="w-10"/>
      <buttons className="dark:text-white"> Menu</buttons>
    </div>
  );
}
