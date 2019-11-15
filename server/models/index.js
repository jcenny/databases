var db = require('../db');
const Promise = require('bluebird');
db.queryAsync = Promise.promisify(db.query);


module.exports = {
  messages: {
    get: function () {
      // db.connect();
      const queryString = 'SELECT messages.text, messages.time, users.name AS username, room.name AS roomname FROM messages INNER JOIN users ON messages.user_id = users.id INNER JOIN room ON messages.room_id = room.id ORDER BY messages.time ASC';
      return db.queryAsync(queryString).then((results) => {
        // db.end();
        return results;
      });
    }, // a function which produces all the messages
    post: function (username, roomname, text) {
      // db.connect();
      let userId = null;
      let roomId = null;
      return db.queryAsync('INSERT INTO users (name) VALUES (?)', [username])
        .then((results) => {
          console.log(JSON.stringify(results) + 'user');
          userId = results.insertId;
          db.queryAsync('INSERT INTO room (name) VALUES (?)', [roomname]).then((results) => {
            console.log(JSON.stringify(results) + 'room');
            roomId = results.insertId;
            db.queryAsync('INSERT INTO messages (text, user_id, room_id) VALUES (?, ?, ?)', [text, userId, roomId]).then((results) => {
              console.log(JSON.stringify(results) + 'messages');
              return 'SUCESSFUL';
              // db.end();
            });
          });
        });
    } // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.
    get: function () {
      // db.connect();
      const queryString = 'SELECT users.name AS username, messages.text, messages.time, room.name AS roomname FROM messages INNER JOIN users ON messages.user_id = users.id INNER JOIN room on messages.room_id = room.id ORDER BY messages.time ASC';
      return db.queryAsync(queryString).then((results) => {
        // db.end();
        return results;
      });
    },
    post: function (name) {
      // db.connect();
      const queryString = 'INSERT INTO users (name) VALUES(?)';
      const queryArg = [name];
      return db.queryAsync(queryString, queryArg).then((results) => {
        // db.end();
        return 'SUCCESSFUL POST';
      });
    }
  }
};

