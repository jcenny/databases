DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(25)
);

CREATE TABLE room (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(25)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  text VARCHAR(281),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  room_id INT,
  FOREIGN KEY (room_id) REFERENCES room(id)
);

/* Create other tables and define schemas for them here! */
insert into users (name) values ('jenny');
insert into users (name) values ('dan');
insert into room (name) values ('test1');
insert into messages (text, user_id, room_id) values ('hel', 1, 1);
insert into messages (text, user_id, room_id) values ('hello', 2, 1);

-- SELECT messages.id, messages.text, messages.time, users.name AS username, room.name AS roomname FROM messages INNER JOIN users ON messages.user_id = users.id INNER JOIN room ON messages.room_id = room.id ORDER BY messages.id ASC;
-- curl -d '{"username": "jenny", "roomname": "test", "text": "whyyyyyyy"}' -H "Content-Type: application/json" -X POST http://localhost:3000/classes/messages

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

