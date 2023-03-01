import React from 'react'

export default function Footer() {
  return (
	<div className='mt-20 flex flex-col'>
		<p>Thanks for Visiting!</p>
		<p className="text-sm mt-2  opacity-50">
				&copy; {new Date().getFullYear()} Colten Siemer. All rights reserved.
			</p>
	</div>
  )
}
