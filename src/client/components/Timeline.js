import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Ranges from './Ranges';
import Slider from './Slider';

const styles = {
  container: {
    borderRadius: '0.33rem',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1rem',
    width: '100%'
  }
};

class Timeline extends React.Component {
  handleSliderChange = (event) => {
    if (!event.target) {
      return;
    }

    const { value } = event.target;

    this.props.onChange(Number(value));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Ranges
          events={this.props.events}
          maxTs={this.props.maxTs}
          onClick={this.props.onChange}
        />
        <Slider
          onChange={this.handleSliderChange}
          max={this.props.maxTs}
          value={this.props.currentTs}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Timeline);
