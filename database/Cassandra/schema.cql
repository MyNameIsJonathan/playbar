CREATE KEYSPACE mykeyspace WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 2};

CREATE TABLE songs (  
   song_id int,
   length int,
   time_stamp int,
   is_liked int,
   song_data_url text,
   song_name text,
   artist text,
   album text,
   thumbnail_url text,
   PRIMARY KEY (song_id)
);

CREATE TABLE likes (
   id int,
   song_id int,
   user_id int,
   PRIMARY KEY (id)
);
