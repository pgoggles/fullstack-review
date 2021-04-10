import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => {
  var topRepos = props.repos.slice(0, 25);
  console.log(topRepos);
  return (
    <div>
      <div>
        <h4>There are {props.repos.length} repos.</h4>
      </div>
      <h4>Here are the Top 25 by Number of Watchers!</h4>
      <div>
        {topRepos.map((repo) =>
          <RepoEntry repo={repo}/>
        )}
      </div>
    </div>
  );
};

export default RepoList;