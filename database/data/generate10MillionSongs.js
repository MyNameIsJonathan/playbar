const faker = require('faker');

// Save data as both csv and json
const filenameCSV =
  '/Users/jonathanolson/HackReactor/SDC/playbar/database/data/generatedData.csv';
const filenameJSON =
  '/Users/jonathanolson/HackReactor/SDC/playbar/database/data/generatedData.json';

// Generate data
const seedData = () => {
  for (let i = 0; i < 100; i += 1) {
    const length = Math.floor(Math.random() * 350);
    const randomSong = {
      song_id: i,
      length,
      time_stamp: Math.floor(Math.random() * length),
      is_liked: Math.floor(Math.random() * 2),
      song_file: 'Shelter.mp3',
      title: faker.random.words(),
      artist: faker.name.findName(),
      album: faker.commerce.productName(),
      thumbnail: faker.image.imageUrl(),
    };
  }
};
