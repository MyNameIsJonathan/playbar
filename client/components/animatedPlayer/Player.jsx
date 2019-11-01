import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrubbing: false, scrubtime_stampLocation: 0 };
    this.startScrubbing = this.startScrubbing.bind(this);
    this.endScrubbing = this.endScrubbing.bind(this);
    this.scrubTimeline = this.scrubTimeline.bind(this);
  }

  startScrubbing() {this.setState( { isScrubbing: true })}

  endScrubbing() {this.setState( {isScrubbing: false })}

  scrubTimeline(scrubtime_stampLocation) { 
    const { isScrubbing } = this.state;
    if(isScrubbing) {
      this.setState({ scrubtime_stampLocation });
    }
  }
  
  render() {
    const { length, time_stamp, scrub } = this.props;
    const { isScrubbing, scrubtime_stampLocation } = this.state;
    const timelinetime_stamp = (isScrubbing) ? scrubtime_stampLocation : time_stamp;
    
    return (
      <div>
        <CurrentTime elapsed={timelinetime_stamp} />
        <Timeline
          length={length}
          elapsed={timelinetime_stamp}
          scrub={scrub}
          startScrubbing={this.startScrubbing}
          endScrubbing={this.endScrubbing}
          scrubTimeline={this.scrubTimeline}
        />
        <Remaining length={length} elapsed={timelinetime_stamp} />
      </div>
    );
  }
}

Player.propTypes = {
  length: PropTypes.number.isRequired,
  time_stamp: PropTypes.number.isRequired,
  scrub: PropTypes.func.isRequired,
};

export default Player;
