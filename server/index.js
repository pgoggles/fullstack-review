const express = require('express');
let app = express();

const github = require('../helpers/github.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());

app.post('/repos', function (req, res) {
  var searchTerm = req.body.searchTerm;
  github.getReposByUsername(searchTerm, (data) => {
    res.status(200);
    res.end(JSON.stringify(data.data));
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

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

