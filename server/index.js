const express = require('express');
let app = express();

const github = require('../helpers/github.js');
const bodyParser = require('body-parser');
const mongo = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());

app.post('/repos', function (req, res) {
  var searchTerm = req.body.searchTerm;
  github.getReposByUsername(searchTerm, (data) => {
    for (var i = 0; i < data.data.length; i++) {
      var obj = {
        name: data.data[i].name,
        id: data.data[i].id,
        url: data.data[i].html_url,
        forks: {
          forkCount: data.data[i].forks_count,
          forkUrl: data.data[i].forks_url
        },
        watchers: data.data[i].watchers,
        openIssues: {
          issueCount: data.data[i].open_issues_count,
          issueUrl: data.data[i].issues_url,
        },
        download: {
          hasDownloads: data.data[i].has_downloads,
          downloadUrl: data.data[i].downloads_url,
        },
        owner: {
          name: data.data[i].owner.login,
          url: data.data[i].owner.url,
          profilePicture: data.data[i].owner.avatar_url,
        }
      };
      mongo.save(data.data[i].id, obj);
    }
    mongo.getRepos((err, rawResponse) => {
      if (err) {
        res.status(400);
        res.end('Could not search and store data');
      } else {
        res.status(200);
        res.end(JSON.stringify(rawResponse));
      }
    });
  });
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

app.get('/allrepos', function(req, res) {
  mongo.getRepos((err, rawResponse) => {
    if (err) {
      res.status(400);
      res.end('Could not search and store data');
    } else {
      res.status(200);
      res.end(JSON.stringify(rawResponse));
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

