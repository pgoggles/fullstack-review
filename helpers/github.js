const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback = (data) => console.log(data.data)) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos?type=owner`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    method: 'GET'
  };
  axios(options)
    .then(callback);
};

module.exports.getReposByUsername = getReposByUsername;