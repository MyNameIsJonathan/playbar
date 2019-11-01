import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/infobar.css';

function Like({ songId, is_liked, like }) {
  const click = () => {
    like(songId, is_liked);
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
  songId: PropTypes.number.isRequired,
  is_liked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default Like;
