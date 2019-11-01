DROP DATABASE IF EXISTS playbar;

CREATE DATABASE playbar;

USE playbar;

CREATE TABLE songs
(
  id INT NOT NULL
  AUTO_INCREMENT,
  song_id INT NOT NULL,
  length INT NOT NULL,
  time_stamp INT DEFAULT 0,
  is_liked TINYINT DEFAULT 0,
  song_data_url VARCHAR
  (150),
  title VARCHAR
  (150),
  artist VARCHAR
  (60),
  album VARCHAR
  (60),
  thumbnail_url VARCHAR
  (150),
  PRIMARY KEY
  (id)
);
