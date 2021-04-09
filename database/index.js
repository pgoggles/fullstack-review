const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  id: Number,
  url: String,
  forks: {
    forkCount: Number,
    forkUrl: String
  },
  watchers: Number,
  openIssues: {
    issueCount: Number,
    issueUrl: String,
  },
  download: {
    hasDownloads: Boolean,
    downloadUrl: String,
  },
  owner: {
    url: String,
    profilePicture: String,
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
};

module.exports.save = save;