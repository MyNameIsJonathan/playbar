import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';
import UpNext from './UpNext';
import styles from '../../cssModules/infobar.css'

function MetaData({ song_id, is_liked, like }) {

  return (
    <div className={styles.metaDataGrid}>
      <Like song_id={song_id} is_liked={is_liked} like={like} />
      <UpNext />
    </div>
  );
}

MetaData.propTypes = {
  song_id: PropTypes.number.isRequired,
  is_liked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default MetaData;
