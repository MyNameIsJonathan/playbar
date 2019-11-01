const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cb = require('./routeCallbacks');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

// var corsOptions = {
//     origin: true,
//     methods:['GET', 'POST'],
//     // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// A query to http://localhost:3000/songs queries 'songs' table
app.get('/:playlist', cb.getPlaylist);

app.post('/playlist/:playlist', jsonParser, cb.playlistEntry);

// Update like status
app.post('/like/:song_id', jsonParser, cb.likeEntry);

// CREATE SONG
app.post('/songs/:song_name', cb.postSong);

// GET SONG
app.get('/songs/:id', cb.getSong);

// PUT SONG
app.put('/songs/:id', cb.putSong);

// DELETE SONG
app.delete('/songs/:id', cb.deleteSong);

app.listen(port);
