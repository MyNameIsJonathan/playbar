const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')
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

app.get('/songs/:id', cb.getSong);

app.get('/:playlist', cb.getPlaylist);

app.post('/like/:songId', jsonParser, cb.likeEntry);

app.post('/playlist/:playlist', jsonParser, cb.playlistEntry);

app.listen(port);
