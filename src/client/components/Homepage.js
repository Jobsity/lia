import React, { Fragment } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import InformationTabs from './InformationTabs';
import EditorTabs from './EditorTabs';
import Instructions from './Instructions';
import TopBar from './TopBar';

const styles = (theme) => ({
  layout: {
    ...theme.inject.flex({ dir: 'column' }),
    width: '100%',
    height: '100%',
    padding: '10px',
    backgroundColor: 'transparent'
  },
  titleBar: {
    width: '100%',
    height: '50px',
    color: 'white'
  },
  section: {
    ...theme.inject.flex(),
    flex: '1',
  },
  side: {
    ...theme.inject.flex({ dir: 'column' }),
    overflow: 'scroll'
  },
  leftSide: {
    flex: '0.6'
  },
  rigthSide: {
    flex: '0.4',
    marginLeft: '15px'
  }
})

class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper
        square
        className={classes.layout}>
        <div className={classes.titleBar}>
          Live Interview App
        </div>
        <div className={classes.section}>
          <div className={classNames(classes.side, classes.leftSide)}>
            <EditorTabs />
            <Instructions />
          </div>
          <div className={classNames(classes.side, classes.rigthSide)}>
            <InformationTabs />
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Homepage);
