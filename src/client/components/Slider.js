import React from 'react';
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
      background: theme.palette.primary.main,
      margin: 0,
      opacity: 0.7,
      outline: 'none',
      overflow: 'hidden',
      transition: 'opacity .2s',
      'z-index': 2,
      '-webkit-transition': '.2s',
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
  const { classes } = props;

  return (
    <input
      className={classes.slider}
      max={props.max}
      min="0"
      onChange={props.onChange}
      step={props.step}
      type="range"
      value={props.value}
    />
  );
}

export default withStyles(styles, { withTheme: true })(Slider);
