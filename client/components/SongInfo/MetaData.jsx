import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';
import UpNext from './UpNext';
import styles from '../../cssModules/infobar.css'

function MetaData({ songId, is_liked, like }) {

  return (
    <div className={styles.metaDataGrid}>
      <Like songId={songId} is_liked={is_liked} like={like} />
      <UpNext />
    </div>
  );
}

MetaData.propTypes = {
  songId: PropTypes.number.isRequired,
  is_liked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default MetaData;
