import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  const sliderThumbStyle = {
    background: theme.palette.secondary.main,
    borderRadius: '50%',
    cursor: 'pointer',
    height: '1rem',
    width: '1rem',
  };

  return {
    slider: {
      width: '100%',
      '-webkit-appearance': 'none',
      height: '0.5rem',
      borderRadius: '0.33rem',
      background: theme.palette.primary.main,
      outline: 'none',
      opacity: 0.7,
      '-webkit-transition': '.2s',
      transition: 'opacity .2s',
      '&:hover': {
        opacity: 1,
      },
      '&::-webkit-slider-thumb': {
        appearance: 'none',
        '-webkit-appearance': 'none',
        ...sliderThumbStyle,
      },
      '&::-moz-range-thumb': {
        ...sliderThumbStyle,
      }
    },
  };
};

const Slider = (props) => {
  const { classes, value } = props;

  return (
    <input
      className={classes.slider}
      max="100"
      min="0"
      type="range"
      value={value}
    />
  );
}

export default withStyles(styles, { withTheme: true })(Slider);
