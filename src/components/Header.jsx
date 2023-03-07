import React from "react";
import {ReactComponent as Logo}  from "../assets/svgs/alpha-c-box.svg";



export default function Header({toggleDarkMode}) {
  //State of toggle 
const [isToggle, setIsToggle] = React.useState(true)

// /function to call false isToggle 
const onToggle = () => { 
  setIsToggle(!isToggle)
  toggleDarkMode()
} 


  return (
    <div className=' dark:bg-neutral flex justify-between p-5'>
      <div>
      <Logo className="w-10 dark:fill-primary" />
      <input 
      className="toggle toggle-primary w-10"
      type="checkbox"
      checked={isToggle}
      onClick={onToggle}>
        </input> 
      </div>
      <buttons className="dark:text-white"> Menu</buttons>
    </div>
  ); 
  } 