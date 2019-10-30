const faker = require('faker');
const schema = require('./data/schemaHelpers');
const exampleSongs = require('./data/exampleSongs');

const seedData = () => {
  for (let i = 0; i < 15; i += 1) {
    // If no song at that index, use the last song (uses faker data to fill in details)
    const randomSong = {
      songId: Math.floor(Math.random() * 2000),
      length: 183,
      timestamp: 0,
      isliked: Math.floor(Math.random() * 2),
      songFile: 'Shelter.mp3',
      title: faker.random.words(),
      artist: faker.name.findName(),
      album: faker.commerce.productName(),
      thumbnail: faker.image.imageUrl(),
    };
    // const sampleSong = exampleSongs[i] || randomSong;
    schema
      .songSaverAsync(randomSong)
      .then((results) => console.log('upNextGeneratorAsync result', results))
      .catch((err) => console.log('upNextGeneratorAsync err', err));
  }
};

seedData();
