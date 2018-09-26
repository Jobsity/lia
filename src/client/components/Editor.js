import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import * as fromReducers from './../redux/reducers';
import * as editorActions from './../redux/actions/editor';
import * as playbackActions from './../redux/actions/playback';
import * as timelineActions from './../redux/actions/timeline';

import CodeMirror from './CodeMirror';

class Editor extends Component {
  render() {
    const options = {
      lineNumbers: 'on',
      readOnly: this.props.playbackWasInteracted,
      selectOnLineNumbers: true
    };

    return (
      <CodeMirror
        options={{
          lineNumbers: true,
          
        }}
        styles={{
          overflow: 'hidden'
        }}
      />
      // <MonacoField
      //   code={this.props.code || ''}
      //   editorDidMount={this.editorDidMount}
      //   language={this.props.language}
      //   onChange={this.handleEditorChange}
      //   options={options}
      //   height="500"
      // />
    );
  }
}

// const mapState = (state) => ({
//   changes: fromReducers.getEditorChanges(state),
//   code: fromReducers.getEditorCode(state),
//   language: fromReducers.getLanguage(state),
//   startingTime: fromReducers.getStartingTime(state),
//   playbackWasInteracted: fromReducers.getPlaybackWasInteracted(state)
// });

// const mapDispatch = {
//   addEditorChange: editorActions.addEditorChange,
//   resetTimeline: timelineActions.resetTimeline,
//   setEditorCode: editorActions.setEditorCode,
//   setIsPlaying: playbackActions.setIsPlaying
// };

export default Editor;
// export default connect(
//   mapState,
//   mapDispatch
// )(Editor);
