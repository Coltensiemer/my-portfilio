import React from 'react'

export default function Footer() {
  return (
	<div className='pt-20 pb-5 px-5  flex flex-col dark:bg-neutral'>
		<p className='text-black opacity-50 dark:text-white'>Thanks for Visiting!</p>
		<p className="text-sm mt-2  opacity-50 dark:text-white">
				&copy; {new Date().getFullYear()} Colten Siemer. All rights reserved.
			</p>
	</div>
  )
}
