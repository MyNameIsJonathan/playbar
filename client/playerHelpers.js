import axios from 'axios';

const playerHelpers = {
  // Current Player song will always be the first song in the next up playlist
  next() {
    const { songDataURL, upNext, previousPlays, songs, repeat, shuffle } = this.state;
    // stop current song with time_stampId
    songDataURL.pause();
    clearInterval(this.time_stampID);
    // check if repeating that song
    if (repeat === 'Song') {
      songDataURL.currentTime = 0;
      this.setState({ time_stamp: 0 });
    } else {
      // 1) Splice first song in upNext and push to previousPlays
      previousPlays.push(upNext.shift());
      // 2) If both upNext and songs are empty, call mount to reset state: songs, upnext songDataURL
      if (upNext.length === 0 && songs.length === 0) {
        this.mount();
      } else {
        // 3) If upNext is empty and  set to shuffle, grab a random song to push to upNext
        // 4) Else if upNext is just empty, splice first song in songs and push to upNext
        if (upNext.length === 0 && shuffle === '-alt') {
          const randomIndex = Math.floor(Math.random() * songs.length);
          const randomSong = songs.splice(randomIndex, 1)[0];
          upNext.push(randomSong);
        } else if (upNext.length === 0) {
          upNext.push(songs.shift());
        } 
        // Either way, set state: songs, upNext, previousPlays, *new* songDataURL, time_stamp 0
        this.setState({
          upNext,
          previousPlays,
          songs,
          time_stamp: 0,
          songDataURL: new Audio(upNext[0].songDataURL),
        });
      }
    }
  },
  back() {
    const { songDataURL, upNext, previousPlays } = this.state;
    // stop current song with time_stampId
    songDataURL.pause();
    clearInterval(this.time_stampID);
    // 1) If previousPlays is not empty pop last song and shift into upNext at first position
    if (previousPlays.length > 0) {
      upNext.unshift(previousPlays.pop());
    }
    // 2) Set state: upNext, previousPlays, *new* songDataURL, time_stamp 0
    this.setState({
      upNext,
      previousPlays,
      time_stamp: 0,
      songDataURL: new Audio(upNext[0].songDataURL),
    });
  },
  togglePlay(songDataURL) {
    // If paused, play and vice versa
    // When playing, initialize per second call to tick
    // When pausing, clear the interval to stop per second calls
    if (songDataURL.paused) {
      songDataURL.play();
      this.time_stampID = setInterval(() => this.tick(songDataURL), 1000);
    } else {
      songDataURL.pause();
      this.setState({ time_stamp: songDataURL.currentTime });
      clearInterval(this.time_stampID);
    }
  },
  scrub(newtime_stamp) {
    // Change the value of currentTime to the new time_stamp
    const { songDataURL } = this.state;
    songDataURL.currentTime = newtime_stamp;
    // setState for the time_stamp property
    this.setState({ time_stamp: newtime_stamp });
  },
};

export default playerHelpers;
