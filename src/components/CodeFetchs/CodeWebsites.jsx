import React, { useState } from 'react'
import GitHubAPI from './GitHubAPI'

export default function CodeWebsites(props) {

	const [isData, setData] = useState(props.data)
	
	console.log(isData)

	
  return (
	<div className=''>
<GitHubAPI /> 

	</div>
  )
}
