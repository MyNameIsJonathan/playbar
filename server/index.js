const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cb = require('./routeCallbacks');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// GET SONG
app.get('/songs/:songId/:userId', cb.getSong); // TODO carry userId through functionality to return if current user likes current song

// CREATE SONG
app.post('/songs', cb.postSong);

// PUT SONG
app.put('/songs', cb.putSong);

// DELETE SONG
app.delete('/songs/:songId', cb.deleteSong);

// Update like status
app.post('/likes', jsonParser, cb.likeEntry);

app.listen(port);
