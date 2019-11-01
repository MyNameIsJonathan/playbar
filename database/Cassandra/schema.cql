CREATE KEYSPACE mykeyspace WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 2};

CREATE TABLE songs (  
   song_id int,
   length int,
   time_stamp int,
   is_liked int,
   song_file text,
   song_name text,
   artist text,
   album text,
   thumbnail text,
   PRIMARY KEY (song_id)
);
