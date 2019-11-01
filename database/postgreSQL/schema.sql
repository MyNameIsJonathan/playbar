DROP DATABASE IF EXISTS playbar;

CREATE DATABASE playbar;

USE playbar;

CREATE TABLE songs (
  song_id INT NOT NULL AUTO_INCREMENT,
  length INT NOT NULL,
  time_stamp INT DEFAULT 0,
  is_liked TINYINT DEFAULT 0,
  song_file VARCHAR (150),
  title VARCHAR (150),
  artist VARCHAR (60),
  album VARCHAR (60),
  thumbnail VARCHAR (150),
  PRIMARY KEY (song_id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30),
  user_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE likes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  song_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE albums (
  id INT NOT NULL AUTO_INCREMENT,
  album_id INT,
  album_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE album_songs (
  id INT NOT NULL AUTO_INCREMENT,
  song_id INT,
  album_id INT,
  PRIMARY KEY (id)
);
