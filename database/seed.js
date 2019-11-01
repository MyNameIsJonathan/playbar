const faker = require('faker');
const schema = require('./data/schemaHelpers');
const exampleSongs = require('./data/exampleSongs');

const seedData = () => {
  for (let i = 0; i < 15; i += 1) {
    // If no song at that index, use the last song (uses faker data to fill in details)
    const randomSong = {
      song_id: Math.floor(Math.random() * 2000),
      length: 183,
      time_stamp: 0,
      is_liked: Math.floor(Math.random() * 2),
      song_data_url: 'Shelter.mp3',
      title: faker.random.words(),
      artist: faker.name.findName(),
      album: faker.commerce.productName(),
      thumbnail_url: faker.image.imageUrl(),
    };
    // const sampleSong = exampleSongs[i] || randomSong;
    schema
      .songSaverAsync(randomSong)
      .then((results) => console.log('upNextGeneratorAsync result', results))
      .catch((err) => console.log('upNextGeneratorAsync err', err));
  }
};

seedData();
