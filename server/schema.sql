CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int(10) PRIMARY KEY AUTO_INCREMENT,
  message_text varchar(255),
  username_id int(10),
  roomname varchar(255)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  ID int(10) PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

