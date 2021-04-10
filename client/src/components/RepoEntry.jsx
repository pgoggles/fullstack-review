import React from 'react';

const RepoEntry = (props) => {
  return (
    <div class="RepoEntry">
      <div class="Flex1">
        <a href={props.repo.url}>
          <img class="RepoImage" src={props.repo.owner.profilePicture} height="55" ></img>
        </a>
      </div>
      <div class="Flex2">
        <a href={props.repo.url}>
          <div class="RepoEntryName">{props.repo.name}</div>
        </a>
        <div class="SubFlex2">
          <div class="Fork">
            <a href={props.repo.forks.forkUrl}>
              <img height="24" src="https://img.icons8.com/material-sharp/24/000000/code-fork.png"/>
              <div>{props.repo.forks.forkCount}</div>
            </a>
          </div>
          <div class="Watchers">
            <img height="24" src="https://img.icons8.com/fluent-systems-filled/48/000000/visible.png"/>
            <div>{props.repo.watchers}</div>
          </div>
          <div class="Issues">
            <img height="24" src="https://img.icons8.com/metro/26/000000/warning-shield.png"/>
            <div>{props.repo.openIssues.issueCount}</div>
          </div>
          <a href={props.repo.owner.url}>
            <div class="AuthorName">
              {props.repo.owner.name}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoEntry;