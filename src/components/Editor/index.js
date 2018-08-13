import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as fromReducers from '../../reducers';
import * as editorActions from '../../actions/editor';
import * as playbackActions from '../../actions/playback';

import MonacoField from '../MonacoField/MonacoField';

class Editor extends Component {
  defaultCode = '// type your code...';

  editor = null;

  model = null;

  timeoutId = null;

  editorDidMount = (editor) => {
    this.editor = editor;
    this.model = editor.getModel();

    this.props.resetStartingTime();

    const { editorDidMount } = this.props;
    if (editorDidMount) {
      editorDidMount(editor);
    }
  }

  handleEditorChange = (newValue, event) => {
    if (this.props.isPlaying) {
      return null;
    }

    const { range, text } = event.changes[0];
    const currentTime = new Date().getTime();
    const newChange = {
      edit: { range, text },
      ts: currentTime - this.props.startingTime,
      viewState: this.editor.saveViewState(),
    };

    this.props.addEditorChange(newChange, newValue);
  }

  togglePlayPause = () => {
    const { isPlaying, setIsPlaying } = this.props;

    setIsPlaying(!isPlaying);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isPlaying && !this.props.isPlaying) {
      clearTimeout(this.timeoutId);
    }

    if (!prevProps.isPlaying && this.props.isPlaying) {
      this.model.setValue(this.defaultCode);
      this.playNextChange(0, 0);
    }
  }

  playNextChange(nextIndex, prevTs) {
    const { editor, model } = this;
    const { changes } = this.props;
    const change = changes[nextIndex];
    const timeout = change.ts - prevTs;

    this.timeoutId = setTimeout(() => {
      model.applyEdits([change.edit]);
      editor.restoreViewState(change.viewState);

      this.props.setEditorCode(model.getValue());

      if (nextIndex + 1 < changes.length) {
        this.playNextChange(nextIndex + 1, change.ts);
      } else {
        this.props.setIsPlaying(false);
      }
    }, timeout);
  }

  render() {
    const { isPlaying, onPlayPause } = this.props;
    const options = {
      lineNumbers: 'on',
      readOnly: isPlaying,
      selectOnLineNumbers: true,
    };

    return (
      <div>
        <button onClick={this.togglePlayPause}>
          {isPlaying ? 'Stop' : 'Play'}
        </button>
        <MonacoField
          code={this.props.code}
          editorDidMount={this.editorDidMount}
          onChange={this.handleEditorChange}
          options={options}
          height="500"
        />
      </div>
    );
  }
};

const mapState = state => ({
  changes: fromReducers.getEditorChanges(state),
  code: fromReducers.getEditorCode(state),
  isPlaying: fromReducers.getIsPlaying(state),
  startingTime: fromReducers.getStartingTime(state),
});

const mapDispatch = {
  addEditorChange: editorActions.addEditorChange,
  resetStartingTime: playbackActions.resetStartingTime,
  setEditorCode: editorActions.setEditorCode,
  setIsPlaying: playbackActions.setIsPlaying,
};

export default connect(mapState, mapDispatch)(Editor);
