DROP DATABASE IF EXISTS playbar;

CREATE DATABASE playbar;

USE playbar;

CREATE TABLE songs (
  song_id INT NOT NULL AUTO_INCREMENT,
  length INT NOT NULL,
  time_stamp INT DEFAULT 0,
  like_count INT DEFAULT 0,
  song_data_url VARCHAR (150),
  title VARCHAR (30),
  artist VARCHAR (30),
  album VARCHAR (30),
  thumbnail_url VARCHAR (150),
  PRIMARY KEY (song_id)
);

CREATE TABLE likes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  song_id INT,
  PRIMARY KEY (id)
);
