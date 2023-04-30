import { useEffect, useState }  from 'react'

export default function GitHubAPI() {

  const [data, setData] = useState(null);
  const [isUserName, setUserName] = useState(null)
  const [isRepos, setRepos] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
      fetch(`https://api.github.com/users/Coltensiemer`)
        .then(res => res.json())
        .then(
          (result) => {
          
            setData(result);
            setUserName(result.login)
            setRepos(result.public_repos)
          }) 
          .catch((error) => { 
            console.log(error)
          }) 
        
    }, [])
  
    console.log(data)

  
  return (
	<div className='dark:text-white'>
   
    <h2>Github Login:{isUserName}</h2>
    <h3>Repos:<span>#{isRepos}</span></h3>
    <h3>Commits:<span>#</span></h3> 
  
  </div>
  )
}
