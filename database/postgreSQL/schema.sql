DROP DATABASE IF EXISTS playbar;

CREATE DATABASE playbar;

USE playbar;

CREATE TABLE songs (
  songId INT AUTO_INCREMENT,
  likeCount INT DEFAULT 0,
  songDataURL VARCHAR (150),
  songName VARCHAR (30),
  artist VARCHAR (30),
  album VARCHAR (30),
  thumbnailURL VARCHAR (150),
  PRIMARY KEY (songId)
);

CREATE TABLE likes (
  id INT AUTO_INCREMENT,
  songId INT,
  userName INT,
  FOREIGN KEY (songId)
    REFERENCES songs(songId)
  PRIMARY KEY (id)
)
