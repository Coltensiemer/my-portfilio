import React from "react";
import { ReactComponent as Logo } from "../assets/svgs/alpha-c-box.svg";

export default function Header({ toggleDarkMode}) {


  //State of toggle 
const [isToggle, setIsToggle] = React.useState(true)

// /function to call false isToggle 
const onToggle = () => { 
  setIsToggle(!isToggle)
  toggleDarkMode()
}
  return (
    <div className="flex justify-between p-5 dark:bg-neutral">
      <div className="flex flex-col">
        <Logo className="w-10 dark:fill-primary" alt="logo" />
        <input
          type="checkbox"
          className="toggle-warning toggle h-5 w-10 pt-5"
          checked={isToggle}
          onChange={onToggle}
         
        > 
          </input> 
      </div>
      {/* <buttons className="dark:text-white self-center"> Menu</buttons> */}
    </div>
  ); 

  } 