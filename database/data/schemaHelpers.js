const Promise = require('bluebird');
const db = require('../index');

module.exports = Promise.promisifyAll({
  songSaver: (song, cb) => {
    const stmt = `INSERT INTO songs (song_id, length, time_stamp, is_liked, song_data_url, title, artist, album, thumbnail_url) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
              `;
    const songVals = [
      song.song_id,
      song.length,
      song.time_stamp,
      song.is_liked,
      song.song_data_url,
      song.title,
      song.artist,
      song.album,
      song.thumbnail_url,
    ];
    db.queryAsync(stmt, songVals)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  playlistSaver: (song_id, playlist, cb) => {
    const stmt = `INSERT INTO ${playlist} (song_id) 
               VALUES (?)
              `;
    db.queryAsync(stmt, song_id)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  songGetter: (song_id, cb) => {
    const stmt = 'SELECT * FROM songs WHERE id = ?';
    db.queryAsync(stmt, song_id)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  // TODO COMPLETE -- AFTER CHOOSING DB
  songPoster: (song_id, cb) => {
    const stmt = 'SELECT * FROM songs WHERE id = ?';
    db.queryAsync(stmt, song_id)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  // TODO COMPLETE -- AFTER CHOOSING DB
  songPutter: (song_id, updatedVals, cb) => {
    const stmt = db.query('UPDATE songs SET ? WHERE id = ?');
    db.queryAsync(stmt, [updatedVals, song_id])
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  // TODO COMPLETE -- AFTER CHOOSING DB
  songDeleter: (song_id, cb) => {
    const stmt = 'DELETE * FROM songs WHERE id = ?';
    db.queryAsync(stmt, song_id)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  playlistGetter: (playlist, cb) => {
    const stmt = `SELECT * FROM ${playlist}`;
    db.queryAsync(stmt)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  likeUpdater: (song_id, like, cb) => {
    const newStatus = like ? 0 : 1;
    const stmt = `UPDATE songs SET is_liked = ${newStatus}
                  WHERE song_id = ${song_id}
                  `;
    db.queryAsync(stmt)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
});
