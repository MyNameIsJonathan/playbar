import React from 'react';
import PropTypes from 'prop-types';

function Like({ songId, isLiked, like }) {
  const click = () => {
    like(songId, isLiked);
  };

  return (
    <div
      className="like metaButton"
      id={isLiked ? 'liked' : 'like'}
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
  isLiked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default Like;
