DROP KEYSPACE IF EXISTS mykeyspace;

CREATE KEYSPACE mykeyspace WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 2
};

use mykeyspace;

CREATE TABLE songs (  
   songId int,
   likeCount int,
   songDataURL text,
   songName text,
   artist text,
   album text,
   thumbnailURL text,
   likeId int,
   likeUserName text,
   PRIMARY KEY (songId, likeID)
);

CREATE TABLE playHistory (
   songId INT,
   userName text, 
   PRIMARY KEY (songId)
);

INSERT INTO songs (
   songId, 
   likeCount,
   songDataURL,
   songName,
   artist,
   album,
   thumbnailURL,
   likeId,
   likeUserName
   ) 
   VALUES (
      1, 
      5, 
      'http://my_song.aws', 
      'Hallowed Be Thy Name', 
      'Iron Maiden',
      'Iron Maiden Album',
      'https://my_thumbnail.com/thumbnail1',
      12,
      'myUsername'
      );

select * from songs WHERE songId = 1;
