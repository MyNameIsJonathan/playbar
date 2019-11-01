/* eslint-disable no-param-reassign */
import axios from 'axios';

const metaHelpers = {
  // Current Player song will always be the first song in the next up playlist
  mount() {
    axios
      .get('http://localhost:3000/songs')
      .then((results) => {
        // 1) Get all the songs as the default playlist
        const songs = results.data;
        // 2) Splice out first song and push to upNext playlist
        const upNext = [];
        upNext.push(songs.shift());
        // 3) When setting state, make a song_file out of upNext[0]
        // 4) Set state: songs, upNext, song_file
        this.setState({
          songs,
          upNext,
          song_file: new Audio(upNext[0].song_file),
        });
      })
      .catch((err) => console.log('mount err: ', err));
  },
  tick(song_file) {
    const {songs, upNext, repeat, song_file} = this.state;
    // If the song has ended
    //   1) clear the interval,
    //   2) repeat song if necessary,
    //   3) call next if possible,
    //   4) if repeating all AND at the end, restart with previousPlays
    const isEnded = song_file.ended;
    if (isEnded) {
      clearInterval(this.time_stampID);
      if (repeat === 'Song') {
        song_file.currentTime = 0;
        this.setState({time_stamp: 0});
      } else if (songs.length > 0 || upNext.length > 0) {
        this.next();
      } else if (repeat === 'List') {
        // mount makes a request for the songList, and resets state for songs, upNext, and song_file
        this.mount();
      }
    } else {
      // Tick is called each second when playing,
      //   storing the currentTime property from the Audio element
      this.setState({time_stamp: song_file.currentTime});
    }
  },
  shuffle() {
    const {shuffle} = this.state;
    let newStatus;
    //  check shuffle state and rotate between '' and '-alt', where '' references the default classname
    if (shuffle === '') {
      newStatus = '-alt';
    } else {
      newStatus = '';
    }
    this.setState({shuffle: newStatus});
  },
  repeat() {
    const {repeat} = this.state;
    let newStatus;
    //  check repeat state and rotate between: '' to 'List' to 'Song' back to ''
    if (repeat === '') {
      newStatus = 'List';
    } else if (repeat === 'List') {
      newStatus = 'Song';
    } else {
      newStatus = '';
    }
    this.setState({repeat: newStatus});
  },
  like(song_id, is_liked) {
    const {upNext} = this.state;
    //  Post to the "http://localhost:3000/like:song_id" route to toggle like status
    axios
      .post(`http://localhost:3000/like/${song_id}`, {is_liked: is_liked})
      .then(() => {
        this.setState((state) => {
          state.upNext[0].is_liked = state.upNext[0].is_liked ? 0 : 1;
          return {upNext};
        });
      })
      .catch((err) => console.log('like err', err));
  },
};

export default metaHelpers;
