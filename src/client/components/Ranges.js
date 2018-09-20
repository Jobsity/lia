import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import isEqual from 'lodash/isEqual';

import createRanges from './createRanges';

import Editor from './EditorRange';
import Output from './OutputRange';

const typedComponents = {
  editor: Editor,
  output: Output,
}

const styles = () => ({
  box: {
    cursor: 'pointer',
    display: 'inline-block',
    height: 'inherit',
    opacity: 0.7,
    position: 'absolute',
    textAlign: 'center',
    '&:hover': {
      opacity: 1,
    },
  },
  boxInternal: {
    bottom: 0,
    display: 'inline-block',
    height: '100%',
    transform: 'translate(-50%, 0)',
    zIndex: 4,
  },
  container: {
    alignItems: 'center',
    position: 'relative',
    height: '1rem',
    minWidth: '100px',
  },
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

    this.setState({ ranges: createRanges(events) });
  }

  renderOneRange(range) {
    const { classes, maxTs, onClick } = this.props;
    const Component = typedComponents[range.type];
    const children = <Component dataArray={range.dataArray}/>;
    const left = `${100 * range.start / maxTs}%`;
    const widthRate = (range.end - range.start) / maxTs;
    const width = `${100 * widthRate}%`;

    return (
      <div
        className={classes.box}
        onClick={() => onClick(range.start)}
        style={{ left, width }}
      >
        {
          widthRate < 0.01
            ? (
              <div className={classes.boxInternal}>
                {children}
              </div>
            ) : children
        }
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { ranges } = this.state;

    if (ranges.length === 0) {
      return null;
    }

    return (
      <div className={classes.container}>
        {ranges.map(range => this.renderOneRange(range))}
      </div>
    );
  }
}

export default withStyles(styles)(Ranges);
