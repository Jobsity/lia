import React from "react";
import { PropTypes } from "prop-types";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";

const InformationTabsView = ({
  data,
  loading,
  tabs,
  activeTab,
  onChangeActiveTab,
  role,
  classes
}) => (
  <div style={{ backgroundColor: "#FFFFFF" }}>
    {loading ? (
      <CircularProgress
        classes={{ root: classes.loading }}
        size={200}
        color="secondary"
      />
    ) : (
      <Tabs defaultIndex={0}>
        <TabList>{tabs.map(tab => <Tab key={tab.id}>{tab.name}</Tab>)}</TabList>
        {tabs.map(tab => <TabPanel key={tab.id}>{tab.component}</TabPanel>)}
      </Tabs>
    )}
  </div>
);

InformationTabsView.propTypes = {
  data: PropTypes.shape({
    task: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  activeTab: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InformationTabsView);
