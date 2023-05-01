import { useEffect, useState } from 'react';
import Calendar from 'react-github-contribution-calendar';

export default function GitHubAPI() {
  const [data, setData] = useState(null);
  const [isUserName, setUserName] = useState(null);
  const [isReposTotal, setReposTotal] = useState(null);
  const [isRepo, setRepo] = useState(null);
  const [isCommit, setCommit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch for Commits API
  //need to make all commits add together
  fetch(
    `https://api.github.com/repos/Coltensiemer/crowdfunding-product-page-main/commits`
  )
    .then((res) => res.json())
    .then((result) => {
      setRepo(result);
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    fetch(`https://api.github.com/users/Coltensiemer`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setUserName(result.login);
        setReposTotal(result.public_repos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(isRepo);

  return (
    <div className='dark:text-white'>
      <h2>Github Login:{isUserName}</h2>
      <h3>
        Repos:<span>#{isReposTotal}</span>
      </h3>
      <h3>
        Commits:<span>#</span>
      </h3>
    </div>
  );
}
