import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import isEqual from 'lodash/isEqual';

import createRanges from './ranges';

import Range from './Range';

const styles = theme => ({
  container: {
    alignItems: 'center',
    // borderRadius: '0.33rem',
    display: 'flex',
    height: '1rem',
  }
});

class Ranges extends React.Component {
  state = {
    ranges: [],
  }

  componentDidMount() {
    this.updateRanges();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.events, this.props.events)) {
      this.updateRanges();
    }
  }

  updateRanges() {
    const { events } = this.props;

    if (events.length === 0) {
      this.setState({ ranges: [] });
    } else {
      this.setState({ ranges: createRanges(events) });
    }
  }

  render() {
    const { ranges } = this.state;

    if (ranges.length === 0) {
      return null;
    }

    const { classes, maxTs } = this.props;

    return (
      <div className={classes.container}>
        {ranges.map(range => (
          <Range
            maxTs={maxTs}
            onClick={this.props.onClick}
            range={range}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Ranges);
