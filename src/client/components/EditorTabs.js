import React, { Component, Fragment } from 'react';

import Playback from './Playback';
import Editor from './Editor';

import TabsView from './TabsView';
import Output from './Output';
import { api } from './../../server/mockServer';

const tabs = [
  {
    id: 'editor',
    name: 'Editor',
    permissions: ['candidate', 'observer', 'evaluator'],
    component: (
      <Fragment>
        <Editor />
        <Playback />
      </Fragment>
    )
  },
  {
    id: 'output',
    name: 'Output',
    permissions: ['candidate', 'observer', 'evaluator'],
    component: <Output />
  }
];

class EditorTabs extends Component {
  state = {
    loading: false, // needs to be true
    roles: '',
    tabs: []
  }
  
  componentDidMount() {
    api.get('/evaluatorToken').then((response) => {
      if (response.status === 200) {
        const { user } = response.data.data;
        const { roles } = user;
        this.setState({
          roles,
          tabs
        })
        // setTimeout(() => this.setState({ loading: false, roles, tabs }), 1000);
      }
    });
  }

  filterTabs = (inclussions, tabs) => tabs.filter((tab, i) => inclussions[i]);

  render() {
    const { roles, tabs, loading } = this.state;
    const inclussions = [];

    if (!loading) {
      // check roles in tabs permissions array
      // and adds it into a truth array
      tabs.forEach((tab, idx) => {
        const { permissions } = tab;
        roles.forEach((rol) => {
          const truth = permissions.includes(rol);
          inclussions.splice(idx, 1, truth);
        });
      });
    }

    // filtered tabs based in truth array
    const roleTabs = this.filterTabs(inclussions, tabs);
    return (
      <TabsView
        tabs={roleTabs}
        loading={loading}
        {...this.state}
      />
    );
  }
}

export default EditorTabs;
