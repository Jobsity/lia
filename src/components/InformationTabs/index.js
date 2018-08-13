import React, { Component } from 'react';
import _ from "lodash";
import InformationTabsView from './InformationTabsView';
import SampleTests from '../SampleTests';
import Output from "../Output";
import CandidateInformation from "../CandidateInformation";
import Evaluation from "../Evaluation";

class InformationTabs extends Component {
  constructor(props, context) {
    super(props, context);
    const activeTab = 'output';

    this.state = {
      activeTab,
      data: {},
      loading: true,
      role: "",
      tabs: []
    };

    this.onChangeActiveTab = this.onChangeActiveTab.bind(this);
  }

  componentDidMount() {

    // hardcoded role and data, its needed a mockserver provider
    const role = "evaluator"

    const data = {
      task: 'This is the task',
    };
    
    const tabs = [
      {
        id: "output",
        name: "Output",
        permissions: ['candidate', 'observer', 'evaluator'],
        component: <Output {...data} />
      },
      {
        id: 'sample_tests',
        name: 'Sample Tests',
        permissions: ['candidate', 'observer', 'evaluator'],
        component: <SampleTests {...data} />
      },
      {
        id: "candidate_information",
        name: "Candidate Information",
        permissions: ['observer', 'evaluator'],
        component: <CandidateInformation {...data} />
      },
      {
        id: "evaluation",
        name: "Evaluation",
        permissions: ['evaluator'],
        component: <Evaluation {...data} />
      }
    ];

   // setTimeout just to watch the animation...
   // must be removed when connected to real server
   setTimeout(() => (this.setState({ data, loading: false, role, tabs })), 1000);
   
  }

  onChangeActiveTab(activeTab) {
    this.setState({ activeTab });
  }

  filterTabs = (inclutions, tabs) => {
    const filter = [];
    tabs.forEach((tab, idx) => {
      if (inclutions[idx]) {
        filter.push(tab);
      }
    });

    return filter;
  };

  render() {

    const { role, tabs, activeTab, loading } = this.state;
    const inclutions = [];
    const defaultIndex = _.findIndex(tabs, ["id", activeTab]);

    // check roles in tabs permissions array
    // and adds it into a truth array
    tabs.forEach((tab, idx) => {
      const { permissions } = tab;
      const truth = permissions.includes(role);
      inclutions.splice(idx, 1, truth);
    });

    // filtered tabs based in truth array
    const roleTabs = this.filterTabs(inclutions, tabs)
    return (
      <InformationTabsView
        onChangeActiveTab={this.onChangeActiveTab}
        {...this.state}
        tabs={roleTabs}
        defaultIndex={defaultIndex}
        loading={loading}
      />
    );
  }
}

export default InformationTabs;
