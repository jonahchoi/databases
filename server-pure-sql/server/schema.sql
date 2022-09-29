CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int(10) PRIMARY KEY AUTO_INCREMENT,
  message varchar(255),
  username varchar(255),
  roomname varchar(255),
  user_id int(10)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  ID int(10) PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

