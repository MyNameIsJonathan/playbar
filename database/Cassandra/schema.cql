CREATE KEYSPACE mykeyspace WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 2
};

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
