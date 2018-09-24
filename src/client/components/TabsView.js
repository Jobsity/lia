import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  tabPaper: {
    height: "-webkit-fill-available" // This not supported across browsers.
  },
  loading: {
    position: "absolute",
    top: "8em",
    left: "8em"
  },
  tabRoot: {
    minWidth: "auto",
    maxWidth: "inherit",
    fontWeight: "bold",
    backgroundColor: theme.palette.background.default,
    borderBottom: "1"
  }
});

function TabContainer({ children }) {
  return <div style={{ overflow: "hidden" }}>{children}</div>;
}

class TabsView extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
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
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                textColor="secondary"
                fullWidth>
                {tabs.map(tab => (
                  <Tab
                    classes={{
                      root: classes.tabRoot
                    }}
                    key={tab.id}
                    label={tab.name}
                  />
                ))}
              </Tabs>
            </AppBar>

            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}>
              {tabs.map((tab, index) => (
                <TabContainer
                  key={index}
                  style={{ overflow: "hidden", height: "" }}
                  dir={theme.direction}>
                  {tab.component}
                </TabContainer>
              ))}
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
