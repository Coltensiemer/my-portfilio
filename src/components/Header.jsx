import React from 'react';
import { ReactComponent as Logo } from '../assets/svgs/alpha-c-box.svg';
import Navbar from './Navbar';

export default function Header({ toggleDarkMode }) {
  //State of toggle
  const [isToggle, setIsToggle] = React.useState(true);

  // /function to call false isToggle
  const onToggle = () => {
    setIsToggle(!isToggle);
    toggleDarkMode();
  };
  return (
    <div className=' absolute z-10 flex justify-between p-5'>
      <div className=' md:fixed z-10 flex flex-col '>
        <Logo className='w-10 h-10 fill-white dark:fill-primary' alt='logo' />
        <input
          type='checkbox'
          aria-label='light and dark mode'
          className='toggle-warning toggle h-5 w-10 pt-5'
          checked={isToggle}
          onChange={onToggle}
        ></input>
      </div>
      <Navbar />
    </div>
  );
}
