import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/infobar.css';

function Like({ song_id, is_liked, like }) {
  const click = () => {
    like(song_id, is_liked);
  };

  return (
    <div
      className={is_liked ? styles.liked : styles.like}
      onClick={click}
      onKeyDown={click}
      role="button"
      tabIndex="-1"
      aria-label="like"
    />
  );
}

Like.propTypes = {
  song_id: PropTypes.number.isRequired,
  is_liked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default Like;
