import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/button.css'

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: props.songDataURL.volume, isMuted: false };
    this.muteToggle = this.muteToggle.bind(this);
  }

  muteToggle() {
    const { volume, isMuted } = this.state;
    const { songDataURL } = this.props;
    if (isMuted) {
      songDataURL.volume = volume;
    } else {
      songDataURL.volume = 0;
    }
    this.setState({ isMuted: !isMuted });
  }

  render() {
    const { isMuted } = this.state;

    return (
      <span>
        <button
          type="button"
          className={isMuted ? styles.mute : styles.volume}
          onClick={this.muteToggle}
          aria-label={isMuted ? 'un-mute' : 'mute'}
        />
      </span>
    );
  }
}

Volume.propTypes = {
  songDataURL: PropTypes.shape({
    volume: PropTypes.number.isRequired,
  }).isRequired,
};

export default Volume;
