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
  time TIMESTAMP,
  text VARCHAR(281),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  room_id INT,
  FOREIGN KEY (room_id) REFERENCES room(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

