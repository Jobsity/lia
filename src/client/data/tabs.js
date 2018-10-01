import React from 'react';
import Instructions from './../components/Instructions';
import Output from './../components/Output';
import SampleTests from './../components/SampleTests';
import CandidateInformation from './../components/CandidateInformation';
import Evaluation from './../components/Evaluation';
import Scores from './../components/Scores';

export const rightSideTabs = [
  {
    label: 'Sample Tests',
    component: <SampleTests />
  },
  {
    label: 'Candidate Information',
    component: <CandidateInformation />
  },
  {
    label: 'Evaluation',
    component: <Evaluation />
  },
  {
    label: 'Scores',
    component: <Scores />
  }
];

export const leftSideTabs = [
  {
    label: 'Instructions',
    component: <Instructions />
  },
  {
    label: 'Output',
    component: <Output />
  }
];