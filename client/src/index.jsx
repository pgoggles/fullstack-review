import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };

  }
  componentDidMount () {
    this.getRepoCount();
  }
  search (term) {
    // console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: {searchTerm: term},
      success: (data) => this.setState ({repos: JSON.parse(data)})
    });
  }

  getRepoCount () {
    $.ajax({
      type: 'GET',
      url: '/repos',
      success: (data) => this.setState({repos: JSON.parse(data)})
    });
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <div class="OverallFlex">
        <div class="RepoList">
          <RepoList repos={this.state.repos}/>
        </div>
        <div class="Search">
          <Search onSearch={this.search.bind(this)}/>
        </div>
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));