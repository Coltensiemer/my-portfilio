import React, { useState } from 'react';
import GitHubAPI from './GitHubAPI';

export default function CodeWebsites(props) {
  const [isData, setData] = useState(props.data);

  return (
    <div className=''>
      <GitHubAPI />
    </div>
  );
}
