import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import Output from './range/Output';

const styles = theme => ({
  container: {
    background: theme.palette.primary.main,
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    opacity: 0.7,
    textAlign: 'center',
    '&:hover': {
        opacity: 1,
    },
  },
  editor: {
    'background-size': '1rem 1rem',
    'background-image': 'radial-gradient(#fff 0%, #fff 20%, transparent 20%)',
  },
  line: {
    '&:after': {
      backgroundColor: 'purple',
      content: '"|"',
      display: 'block',
      left: '-50%',
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      transform: 'translate(-50%, 0)',
      // width: '0.5em',
      'z-index': 1,
    }
  },
});

class Range extends React.Component {
  handleClick = () => {
    const { onClick, range } = this.props;

    onClick(range.start);
  }

  getClassName() {
    const { classes, range } = this.props;

    if (range.type === 'editor') {
      return [classes.container, classes.editor].join(' ')
    }

    return classes.container;
    // return range.start === range.end
    //   ? [classes.container, classes.line].join(' ')
    //   : classes.container;
  }

  render() {
    const { classes, range, maxTs } = this.props;
    const children = range.type === 'output'
      ? <Output

      /> : null
    const width = `${100 * (range.end - range.start) / maxTs}%`;
    const inlineStyle = range.type === 'output'
      ? {
        width,
        zIndex: 4,
      } : {
        width,
      };

    return (
      <Tooltip title={range.type}>
        <div
          className={this.getClassName()}
          onClick={this.handleClick}
          style={{
            height: '100%',
            ...inlineStyle
          }}
        >
          {children}
        </div>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(Range);
