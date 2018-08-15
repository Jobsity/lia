import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";

function TabContainer({ children, dir }) {
  return (
    <Fragment component="div" dir={dir}>
      {children}
    </Fragment>
  );
}

class InformationTabsView extends Component {
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

    console.log(classes);

    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
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
                      root: classes.tabRoot,
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
              {tabs.map(tab => (
                <TabContainer dir={theme.direction}>
                  {tab.component}
                </TabContainer>
              ))}
            </SwipeableViews>
          </Fragment>
        )}
      </div>
    );
  }
}

InformationTabsView.propTypes = {
  data: PropTypes.shape({
    task: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  activeTab: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(InformationTabsView);
