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
    name: String,
    url: String,
    profilePicture: String,
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (id, obj) => {
  Repo.updateOne({id: id}, obj, {upsert: true}, (err, rawResponse) => {
    if (err) {
      console.log(err);
    }
  });
};

let getRepos = (callback) => {
  Repo.find({}, callback);
};

module.exports.save = save;
module.exports.getRepos = getRepos;