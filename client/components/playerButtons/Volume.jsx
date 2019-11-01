import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/button.css'

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: props.song_data_url.volume, isMuted: false };
    this.muteToggle = this.muteToggle.bind(this);
  }

  muteToggle() {
    const { volume, isMuted } = this.state;
    const { song_data_url } = this.props;
    if (isMuted) {
      song_data_url.volume = volume;
    } else {
      song_data_url.volume = 0;
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
  song_data_url: PropTypes.shape({
    volume: PropTypes.number.isRequired,
  }).isRequired,
};

export default Volume;
