import React, { Fragment } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import InformationTabs from './InformationTabs';
import EditorTabs from './EditorTabs';
import Instructions from './Instructions';
import TabsView from './TabsView';
import Output from './Output';
import Playback from './Playback';

import RealPlayback from './RealPlayback';
import CodeMirror from './CodeMirror';
import JRewind from './../jrewind';

const { Rewinder } = JRewind;

const styles = (theme) => ({
  layout: {
    ...theme.inject.flex({ dir: 'column' }),
    width: '100%',
    height: '100%',
    padding: '15px',
    backgroundColor: 'transparent'
  },
  titleBar: {
    width: '100%',
    height: '50px',
    color: 'white',
    fontSize: 'calc(20px + 1vw)',
    fontFamily: 'sans-serif'
  },
  section: {
    ...theme.inject.flex(),
    flex: '1'
  },
  side: {
    ...theme.inject.flex({ dir: 'column' }),
    overflow: 'scroll'
  },
  leftSide: {
    flex: '0.6'
  },
  rigthSide: {
    flex: '0.4',
    marginLeft: '15px'
  }
});

const tabs = [
  {
    name: 'Instructions',
    id: 'instructions',
    permissions: ['candidate', 'observer', 'evaluator'],
    component: <Instructions />
  },
  {
    name: 'Output',
    id: 'Output',
    permissions: ['candidate', 'observer', 'evaluator'],
    component: <Output />
  }
];

class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper square className={classes.layout}>
        <div className={classes.titleBar}>Live Interview App</div>
        <div className={classes.section}>
          <Rewinder
            render={(record, { run, stop, rewindToMs }) =>
              console.log(record) || (
                <Fragment>
                  <div className={classNames(classes.side, classes.leftSide)}>
                    <CodeMirror
                      value={record.value}
                      onChange={(editor, data, value) =>
                        console.log(value) || JRewind.feeder(value)
                      }
                    />
                    <RealPlayback
                      value={record.currentTime}
                      duration={JRewind.getDuration()}
                      onStart={run}
                      onStop={stop}
                      onRewind={rewindToMs}
                    />
                    <TabsView tabs={tabs} loading={false} />
                  </div>
                  <div className={classNames(classes.side, classes.rigthSide)}>
                    <InformationTabs />
                  </div>
                </Fragment>
              )
            }
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Homepage);
