var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get().then((results) => {
        res.writeHead(200);
        res.end(JSON.stringify(results));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body.username, req.body.roomname, req.body.text).then((results) => {
        res.writeHead(200);
        res.end(results);
      }).catch((err) => {
        console.log('failed to post:' + err);
        res.writeHead(500);
        res.end('fail');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get().then((results) => {
        res.writeHead(200);
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username).then((result) => {
        res.writeHead(200);
        res.end(result);
      }).catch((err) => {
        console.log('failed to post:' + err);
        res.writeHead(500);
        res.end('fail.');
      });
    }
  }
};

