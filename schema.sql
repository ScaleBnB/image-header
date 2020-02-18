/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.
 *
 *  If you setup a password, you will have to add a "-p": mysql -u root -p < schema.sql
 */
DROP DATABASE if exists carousel_images;

CREATE DATABASE carousel_images;

USE carousel_images;

CREATE TABLE items
(
    id INT
    AUTO_INCREMENT NOT NULL,
  listing_id VARCHAR
    (100) NOT NULL,
  user_id  INT NOT NUll,
  image_url VARCHAR
    (100) NOT NULL,
  image_caption VARCHAR
    (100) NOT NULL,
  PRIMARY KEY
    (id)
);