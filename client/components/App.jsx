import React from 'react';
import metaHelpers from '../metaHelpers';
import playerHelpers from '../playerHelpers';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import Button from './playerButtons/Button';
import Volume from './playerButtons/Volume';
import Player from './animatedPlayer/Player';
import InfoBar from './SongInfo/InfoBar';
import styles from '../cssModules/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      upNext: [],
      previousPlays: [],
      song_file: null,
      time_stamp: 0,
      repeat: '',
      shuffle: '',
      volume: .7
    };
    this.mount = metaHelpers.mount.bind(this);
    this.back = playerHelpers.back.bind(this);
    this.togglePlay = playerHelpers.togglePlay.bind(this);
    this.tick = metaHelpers.tick.bind(this);
    this.next = playerHelpers.next.bind(this);
    this.shuffle = metaHelpers.shuffle.bind(this);
    this.repeat = metaHelpers.repeat.bind(this);
    this.scrub = playerHelpers.scrub.bind(this);
    this.like = metaHelpers.like.bind(this);
  }

  componentDidMount() { this.mount() }

  render() {
    const { songs, upNext, song_file, time_stamp, repeat, shuffle } = this.state;
    // className={styles.test}
    return (
      <footer className={styles.footer}> 
        <div className={styles.container}>
          <Button className="back" clickHandler={this.back} />
          {song_file && song_file.paused ? (
            <Play playSong={() => this.togglePlay(song_file)} />
          ) : (
            <Pause pauseSong={() => this.togglePlay(song_file)} />
          )}
          <Button className="next" clickHandler={this.next} />
          <Button className={`shuffle${shuffle}`} clickHandler={this.shuffle} />
          <Button className={`repeat${repeat}`} clickHandler={this.repeat} />
          <div className={styles.player}>
            {song_file
              && <Player length={upNext[0].length} time_stamp={time_stamp} scrub={this.scrub} />}
          </div>
          {song_file && <Volume song_file={song_file} />}
          <div className={styles.infoBar}>
            {upNext[0]
              && <InfoBar playerSong={upNext[0]} like={this.like} />}
          </div>
        </div>
      </footer>
    );
  }
}
export default App;
