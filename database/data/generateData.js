const faker = require('faker');
const fs = require('fs');

// Save data as both csv and json
const songsCSV =
  '/Users/jonathanolson/HackReactor/SDC/playbar/database/data/songs.csv';
const likesCSV =
  '/Users/jonathanolson/HackReactor/SDC/playbar/database/data/likes.csv';
const playHistoryCSV =
  '/Users/jonathanolson/HackReactor/SDC/playbar/database/data/playHistory.csv';

// WRITE HEADERS
const songsHeaders = [
  'songId',
  'likeCount',
  'songDataURL',
  'songName',
  'artist',
  'album',
  'thumbnailURL',
  '\n\r',
];
fs.writeFileSync(songsCSV, songsHeaders, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('song headers written successfully!!');
  }
});

// GENERATE AND SAVE SONG EXAMPLES
const genSaveSongs = () => {
  for (let i = 0; i < 1000; i += 1) {
    // Create song
    const song = [
      faker.internet.userName(),
      faker.random.number(),
      faker.image.imageUrl(),
      faker.random.words(),
      faker.internet.userName(),
      faker.random.word(),
      faker.image.imageUrl(),
      '\r',
    ];
    // write song object to file
    fs.appendFileSync(songsCSV, song, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

genSaveSongs();

// GENERATE AND SAVE LIKES DATA

const genSaveLikes = () => {};

// GENERATE AND SAVE PLAY HISTORY DATA

const genSavePlayHIstory = () => {};
