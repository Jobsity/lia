import React, { Component, Fragment } from "react";

import Playback from './Playback';
import Editor from './Editor';

import TabsView from "./TabsView";
import Output from "./Output";
import { api } from "./../../server/mockServer";



class EditorTabs extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: true,
      roles: "",
      tabs: []
    };
  }

  componentDidMount() {

    const tabs = [
      {
        id: "editor",
        name: "Editor",
        permissions: ["candidate", "observer", "evaluator"],
        component: (
          <Fragment>
            <Editor editorDidMount={this.editorDidMount} />
            <Playback />
          </Fragment>
        )
      },
      {
        id: "output",
        name: "Output",
        permissions: ["candidate", "observer", "evaluator"],
        component: <Output />
      },
    ];

    api.get("/evaluatorToken").then(response => {
      if (response.status === 200) {
        const { user } = response.data.data;
        const { roles } = user;

        // setTimeout just to watch the animation...
        // must be removed when connected to real server
        setTimeout(
          () => this.setState({ loading: false, roles, tabs }),
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

  editorDidMount(editor) {
    editor.focus();
  }

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
      <TabsView
        onChangeActiveTab={this.onChangeActiveTab}
        {...this.state}
        tabs={roleTabs}
        loading={loading}
      />
    );
  }
}

export default EditorTabs;
