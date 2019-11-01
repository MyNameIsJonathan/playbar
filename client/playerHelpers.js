import axios from 'axios';

const playerHelpers = {
  // Current Player song will always be the first song in the next up playlist
  next() {
    const { song_data_url, upNext, previousPlays, songs, repeat, shuffle } = this.state;
    // stop current song with time_stampId
    song_data_url.pause();
    clearInterval(this.time_stampID);
    // check if repeating that song
    if (repeat === 'Song') {
      song_data_url.currentTime = 0;
      this.setState({ time_stamp: 0 });
    } else {
      // 1) Splice first song in upNext and push to previousPlays
      previousPlays.push(upNext.shift());
      // 2) If both upNext and songs are empty, call mount to reset state: songs, upnext song_data_url
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
        // Either way, set state: songs, upNext, previousPlays, *new* song_data_url, time_stamp 0
        this.setState({
          upNext,
          previousPlays,
          songs,
          time_stamp: 0,
          song_data_url: new Audio(upNext[0].song_data_url),
        });
      }
    }
  },
  back() {
    const { song_data_url, upNext, previousPlays } = this.state;
    // stop current song with time_stampId
    song_data_url.pause();
    clearInterval(this.time_stampID);
    // 1) If previousPlays is not empty pop last song and shift into upNext at first position
    if (previousPlays.length > 0) {
      upNext.unshift(previousPlays.pop());
    }
    // 2) Set state: upNext, previousPlays, *new* song_data_url, time_stamp 0
    this.setState({
      upNext,
      previousPlays,
      time_stamp: 0,
      song_data_url: new Audio(upNext[0].song_data_url),
    });
  },
  togglePlay(song_data_url) {
    // If paused, play and vice versa
    // When playing, initialize per second call to tick
    // When pausing, clear the interval to stop per second calls
    if (song_data_url.paused) {
      song_data_url.play();
      this.time_stampID = setInterval(() => this.tick(song_data_url), 1000);
    } else {
      song_data_url.pause();
      this.setState({ time_stamp: song_data_url.currentTime });
      clearInterval(this.time_stampID);
    }
  },
  scrub(newtime_stamp) {
    // Change the value of currentTime to the new time_stamp
    const { song_data_url } = this.state;
    song_data_url.currentTime = newtime_stamp;
    // setState for the time_stamp property
    this.setState({ time_stamp: newtime_stamp });
  },
};

export default playerHelpers;
