CREATE KEYSPACE mykeyspace WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 2};

CREATE TABLE songs (  
   songId int,
   likeId int,
   length int,
   likeCount int,
   songDataURL text,
   songName text,
   artist text,
   album text,
   thumbnailURL text,
   PRIMARY KEY (songId, likeID)
);
