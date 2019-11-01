import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/player.css';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressDotStyles: {} };
    this.showProgressDot = this.showProgressDot.bind(this);
    this.hideProgressDot = this.hideProgressDot.bind(this);
    this.gettime_stamp = this.gettime_stamp.bind(this);
    this.updatetime_stamp = this.updatetime_stamp.bind(this);
    this.handleScrub = this.handleScrub.bind(this);
  }

  showProgressDot() {
    this.setState({
      progressDotStyles: { visibility: 'visible' },
    });
  }

  hideProgressDot() {
    this.setState({ progressDotStyles: { visibility: 'hidden' } });
  }

  gettime_stamp(e) {
    const { length } = this.props;
    const boundingRectangle = document.getElementsByClassName(styles.timelineContainer)[0].getBoundingClientRect();
    const leftTlineBound = boundingRectangle.left;
    const rightTlineBound = boundingRectangle.right;
    let clickLocation = e.clientX;
    if (clickLocation < leftTlineBound) {
      clickLocation = leftTlineBound;
    } else if (clickLocation > rightTlineBound) {
      clickLocation = rightTlineBound;
    }
    // To get the scrubLocation: Subtract the left bound from the click location
    // To get the totalWidth: Subtract the left bound from the right bound
    // Divide scrubLocation by totalWidth to geth the ratio of the total
    let newtime_stamp = (clickLocation - leftTlineBound) / (rightTlineBound - leftTlineBound);
    // Multiply by the song length to get the new time_stamp
    newtime_stamp *= length;
    return newtime_stamp
  }
  
  updatetime_stamp(e) {
    const { scrub } = this.props;
    const newtime_stamp = this.gettime_stamp(e)
    scrub(newtime_stamp);
    // this.showProgressDot();
  }

  handleScrub(e) {
    const { scrubTimeline } = this.props;
    const scrubLocationtime_stamp = this.gettime_stamp(e);
    scrubTimeline(scrubLocationtime_stamp);
  }

  render() {
    const { length, elapsed, startScrubbing, endScrubbing, scrubTimeline } = this.props;
    const { progressDotStyles } = this.state;

    // Animated timeline styles
    // Divide elapsed by length to get the progress ratio and multiply by 100%
    const width = `${(elapsed / length) * 100}%`;
    const animatedStyles = { width };

    return (
      <div
        className={styles.timelineContainer}
        onMouseEnter={this.showProgressDot}
        onFocus={this.showProgressDot}
        onMouseDown={startScrubbing}
        onMouseUp={endScrubbing}
        onMouseOver={this.handleScrub}
        onMouseLeave={this.hideProgressDot}
        onClick={this.updatetime_stamp}
        // onKeyDown={this.updatetime_stamp}
        role="button"
        tabIndex="-1"
        aria-label="song progress bar"
      >
        <div className={styles.timeline}>
          <div className={styles.animatedTimeline} style={animatedStyles}>
            <div className={styles.progressDot} style={progressDotStyles} />
          </div>
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  length: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
  scrub: PropTypes.func.isRequired,
};

export default Timeline;
