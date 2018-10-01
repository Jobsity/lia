import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  tabPaper: {
    ...theme.inject.flex({ dir: 'column' }),
    flex: '1',
    display: 'flex'
  },
  loading: {
    position: 'absolute',
    top: '8em',
    left: '8em'
  },
  tabRoot: {
    fontWeight: 'bold',
    borderBottom: '1'
  },
  swipeable: {
    flex: '1',
    '& > *': {
      width: '100%',
      height: '100%'
    },
    '& > * > *': {
      ...theme.inject.flex({ dir: 'column' })
    }
  }
});

class TabsView extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { loading, tabs, classes, theme } = this.props;

    return (
      <Paper className={classes.tabPaper} square elevation={1}>
        {loading ? (
          <CircularProgress
            classes={{ root: classes.loading }}
            size={200}
            color="secondary"
          />
        ) : (
          <Fragment>
            <AppBar position="static" color="secondary">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto">
                {tabs.map((tab) => (
                  <Tab
                    classes={{
                      root: classes.tabRoot
                    }}
                    color="primary"
                    key={tab.id}
                    label={tab.name}
                  />
                ))}
              </Tabs>
            </AppBar>

            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
              className={classes.swipeable}>
              {tabs.map((tab, index) =>
                React.cloneElement(tab.component, { key: index })
              )}
            </SwipeableViews>
          </Fragment>
        )}
      </Paper>
    );
  }
}

TabsView.propTypes = {
  data: PropTypes.shape({
    task: PropTypes.string
  }),
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TabsView);
