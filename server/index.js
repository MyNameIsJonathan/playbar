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

// Update like status
app.post('/likes/:songId', jsonParser, cb.likeEntry); // TODO add user_id

// CREATE SONG
app.post('/songs/:songName', cb.postSong);

// GET SONG
app.get('/songs/:id', cb.getSong);

// PUT SONG
app.put('/songs/:id', cb.putSong);

// DELETE SONG
app.delete('/songs/:id', cb.deleteSong);

app.listen(port);
