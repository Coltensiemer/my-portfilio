import { useEffect, useState }  from 'react'

export default function GitHubAPI() {

  useEffect(() => { 
 function gitHubFetch() { 
    fetch(`https://api.github.com/users/Coltensiemer`)
    .then(response => response.text().then(data=>{ 
      return data
    }))
  
    console.log("fetch was clicked")
  }
}) 
  
  return (
	<div className='dark:text-white'>
    <h2>Github</h2>
    <h3>Repos:<span>#</span></h3>
    <h3>Commits:<span>#</span></h3>
  </div>
  )
}
