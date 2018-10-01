import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import MaterialUITabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  paper: {
    ...theme.inject.flex({ dir: 'column' }),
    flex: '1'
  },
  // this is hacky, but SwipeableViews doesn't provide a way to style children,
  // anyway, this can be solved just by not using SwipeableViews
  swipeable: {
    ...theme.inject.flex({ dir: 'column' }),
    flex: '1',
    '& > div': {
      ...theme.inject.flex(),
      flex: '1'
    },
    '& > div > div': {
      ...theme.inject.flex({ dir: 'column' }),
    }
  }
});

class Tabs extends PureComponent {
  state = {
    indexOfActiveTab: 0
  }

  handleTabChange = (event, indexOfClickedTab) => {
    this.setState({ indexOfActiveTab: indexOfClickedTab })
  }
  
  render() {
    const { classes, barColor, tabColor, tabs, onTab } = this.props;
    return (
      <Paper className={classes.paper}>
        <AppBar position='static' color={barColor}>
          <MaterialUITabs
            scrollable
            textColor='primary'
            scrollButtons='auto'
            value={this.state.indexOfActiveTab} 
            onChange={this.handleTabChange}>
            {
              tabs.map((tab) => (
                <Tab
                  key={tab.label}
                  label={tab.label}
                  onClick={onTab}
                  color={tabColor} />
              ))
            }
          </MaterialUITabs>
        </AppBar>
        <SwipeableViews
          index={this.state.indexOfActiveTab}
          onChangeIndex={this.handleTabChange}
          className={classes.swipeable} >
          {
            tabs.map((tab) => (
              React.cloneElement(tab.component, { key: tab.label })
            ))
          }
        </SwipeableViews>
      </Paper>
    );
  }
}

Tabs.propTypes = {
  tabColor: PropTypes.string.isRequired,
  barColor: PropTypes.string.isRequired,
  onTab: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired   
  }))
}

export default withStyles(styles)(Tabs);