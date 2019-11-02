DROP DATABASE IF EXISTS playbar;

CREATE DATABASE playbar;

\c playbar;

CREATE TABLE songs 
(
  songId serial PRIMARY KEY,
  likeCount integer DEFAULT 0,
  songDataURL VARCHAR (150),
  songName VARCHAR (30),
  artist VARCHAR (30),
  album VARCHAR (30),
  thumbnailURL VARCHAR (150)
);

CREATE TABLE likes 
(
  id serial PRIMARY KEY,
  songId integer,
  userName VARCHAR(30),
  FOREIGN KEY (songId)
    REFERENCES songs(songId)
);

CREATE TABLE playHistory 
(
  id serial,
  songId integer,
  userName VARCHAR(30),
  FOREIGN KEY (songId)
    REFERENCES songs(songId)
);

INSERT INTO songs (
  likeCount, 
  songDataURL, 
  songName, 
  artist, 
  album, 
  thumbnailURL
)
VALUES (      
  5, 
  'http://my_song.aws', 
  'Hallowed Be Thy Name', 
  'Iron Maiden',
  'Iron Maiden Album',
  'https://my_thumbnail.com/thumbnail1'
);

INSERT INTO likes (
  songId, 
  userName
)
VALUES (      
  1,
  'jonathanO'
);

INSERT INTO playHistory (
  songId, 
  userName
)
VALUES (      
  1,
  'jonathanO'
);

SELECT * FROM songs;
SELECT * FROM likes;
SELECT * FROM playHistory;
