import React from 'react';
import PropTypes from 'prop-types';
import MetaData from './MetaData';
import styles from '../../cssModules/infobar.css';

function InfoBar({playerSong, like}) {
  const click = (type, value) => {
    alert(`Redirecting to the ${type} page for ${value}`);
  };

  return (
    <div className={styles.infoContainer}>
      <div
        className={styles.albumArt}
        role='button'
        onClick={() => click('album', playerSong.album)}
        onKeyDown={() => click('album', playerSong.album)}
        tabIndex='-1'
        aria-label='album'
      >
        <img
          className={styles.albumThumbnail}
          alt='album artwork'
          src={playerSong.thumbnailURL}
        />
      </div>
      <div className={styles.infoGrid}>
        <div
          className={styles.artist}
          role='button'
          onClick={() => click('artist', playerSong.artist)}
          onKeyDown={() => click('artist', playerSong.artist)}
          tabIndex='-1'
          aria-label='artist'
        >
          {playerSong.artist}
        </div>
        <div
          className={styles.title}
          role='button'
          onClick={() => click('song', playerSong.title)}
          onKeyDown={() => click('song', playerSong.title)}
          tabIndex='-1'
          aria-label='song title'
        >
          {playerSong.title}
        </div>
      </div>
      <MetaData
        songId={playerSong.songId}
        is_liked={playerSong.is_liked}
        like={like}
      />
    </div>
  );
}

InfoBar.propTypes = {
  playerSong: PropTypes.shape({
    album: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    is_liked: PropTypes.number.isRequired,
    songId: PropTypes.number.isRequired,
  }).isRequired,
  like: PropTypes.func.isRequired,
};

export default InfoBar;
