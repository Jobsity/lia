import React, { Component } from "react";
import InformationTabsView from "./InformationTabsView";
import SampleTests from "../SampleTests";
import Output from "../Output";
import CandidateInformation from "../CandidateInformation";
import Evaluation from "../Evaluation";
import { api } from "../../mockServer";

class InformationTabs extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      data: {},
      loading: true,
      roles: "",
      tabs: []
    };
  }

  componentDidMount() {
    const data = {
      task: "This is the task"
    };

    const tabs = [
      {
        id: "sample_tests",
        name: "Sample Tests",
        permissions: ["candidate", "observer", "evaluator"],
        component: <SampleTests {...data} />
      },
      {
        id: "output",
        name: "Output",
        permissions: ["candidate", "observer", "evaluator"],
        component: <Output {...data} />
      },
      {
        id: "candidate_information",
        name: "Candidate Information",
        permissions: ["observer", "evaluator"],
        component: <CandidateInformation {...data} />
      },
      {
        id: "evaluation",
        name: "Evaluation",
        permissions: ["evaluator"],
        component: <Evaluation {...data} />
      }
    ];

    api.get("/evaluatorToken").then(response => {
      if (response.status === 200) {
        const { user } = response.data.data;
        const { roles } = user;

        // setTimeout just to watch the animation...
        // must be removed when connected to real server
        setTimeout(
          () => this.setState({ data, loading: false, roles, tabs }),
          1000
        );
      }
    });
  }

  filterTabs = (inclussions, tabs) => {
    const filter = [];
    tabs.forEach((tab, idx) => {
      if (inclussions[idx]) {
        filter.push(tab);
      }
    });

    return filter;
  };

  render() {
    const { roles, tabs, loading } = this.state;
    const inclussions = [];

    if (!loading) {
      // check roles in tabs permissions array
      // and adds it into a truth array
      tabs.forEach((tab, idx) => {
        const { permissions } = tab;
        roles.forEach(rol => {
          const truth = permissions.includes(rol);
          inclussions.splice(idx, 1, truth);
        });
      });
    }

    // filtered tabs based in truth array
    const roleTabs = this.filterTabs(inclussions, tabs);
    return (
      <InformationTabsView
        onChangeActiveTab={this.onChangeActiveTab}
        {...this.state}
        tabs={roleTabs}
        loading={loading}
      />
    );
  }
}

export default InformationTabs;
