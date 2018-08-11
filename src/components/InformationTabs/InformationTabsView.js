import React from 'react';
import { PropTypes } from 'prop-types';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';
import 'react-tabs/style/react-tabs.css';

import SampleTests from '../SampleTests';
import Output from '../Output';
import CandidateInformation from '../CandidateInformation';
import Evaluation from '../Evaluation';

function InformationTabsView({
  data, loading, activeTab, onChangeActiveTab
}) {
  const tabs = [
    { id: 'sample_tests', name: 'Sample Tests', component: <SampleTests {...data} /> },
    { id: 'output', name: 'Output', component: <Output {...data} /> },
    { id: 'candidate_information', name: 'Candidate Information', component: <CandidateInformation {...data} /> },
    { id: 'evaluation', name: 'Evaluation', component: <Evaluation {...data} /> },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <Tabs defaultIndex={_.findIndex(tabs, ['id', activeTab])}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>
              {tab.name}
            </Tab>
          ))}
        </TabList>
        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            {tab.component}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

InformationTabsView.propTypes = {
  data: PropTypes.shape({
    task: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  activeTab: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
};

export default InformationTabsView;
