import React from 'react';
import Card from '../CardWrapper/CardWrapper';
import Popup from 'reactjs-popup';
import { ReactComponent as GitHubLogo } from '../../assets/svgs/github.svg';

export default function AdditionalProjectsItems({
  id,
  title,
  stack,
  github,
  description,
  link,
}) {
  return (
    <>
      <div className=' dark:opacity-50 dark:md:opacity-50 dark:hover:opacity-100 bg-neutral-2 border-primary border border-double``'>
        <div className='relative  py-10 z-0 shadow-3xl '>

          <div className='w-full p-4 '>
            <div className='flex justify-between'>
              <h3 className='text-lg py-4  md:text-xl dark:text-white mb-2 md:mb-3 font-semibold '>
                {title}
              </h3>
              <div className='flex  w-10 hover:-translate-y-2 hover:duration-1000'>
                <a
                  aria-label='Link to GitHub'
                  href={github}
                  alt=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubLogo className=' relative  w-6 h-6 lg:w-8 lg:h-8 fill-white dark:fill-white' />
                </a>
              </div>
            </div>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white '>
              {stack.map((item, id) => (
                <span
                  key={id}
                  className='inline-block px-2 py-1 font-semibold border-2 border-primary  rounded-md'
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className='flex flex-col gap-4 h-auto'>
          

            <Popup
              trigger={
                <button
                  type='button'
                  className='btn  self-center bg-primary text-white hover:text-primary hover:bg-white w-36  m-2 ease-in-out duration-700'
                  onClick={() => handlegitHubAPI()}
                >
                  About this Project!
                </button>
              }
            >
              {(close) => (
                <div className=' animate-slide-in-name flex justify-center flex-col leading-relaxed tracking-widest fixed psudeo bg-neutral3 cursor-pointer overflow-auto mx-4 p-10 top-0 w-100 h-5/6 left-0 text-white border-2 border-primary'>
                  <p className='mb-1 md:text-3xl self-center'>{description}</p>

                  <p className='md:text-3xl'>
                    See more information about this project on{' '}
                    <a href={github} className='underline '>
                      GitHub
                    </a>
                    .
                  </p>
                  <a
                    className='close  border-2 border-primary text-3xl bg-neutral m-1 absolute top-0 right-0'
                    onClick={close}
                  >
                    &times;
                  </a>
                </div>
              )}
            </Popup>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
