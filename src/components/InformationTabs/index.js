import React, { Component } from 'react';
import InformationTabsView from './InformationTabsView';

class InformationTabs extends Component {
  constructor(props, context) {
    super(props, context);
    const activeTab = 'output';

    this.state = {
      activeTab,
      data: {},
      loading: true,
    };

    this.onChangeActiveTab = this.onChangeActiveTab.bind(this);
  }

  componentDidMount() {
    const data = {
      task: 'This is the task',
    };
    this.setState({ data, loading: false });
  }

  onChangeActiveTab(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    return (
      <InformationTabsView
        onChangeActiveTab={this.onChangeActiveTab}
        {...this.state}
      />
    );
  }
}

export default InformationTabs;
