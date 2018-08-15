import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import * as fromReducers from '../../reducers';
import * as editorActions from '../../actions/editor';
import * as playbackActions from '../../actions/playback';
import * as timelineActions from '../../actions/timeline';

import MonacoField from '../MonacoField/MonacoField';

class Editor extends Component {
  defaultCode = '// type your code...';

  editor = null;

  model = null;

  playedIndex = null

  editorDidMount = (editor) => {
    this.editor = editor;
    this.model = editor.getModel();

    const { editorDidMount } = this.props;
    if (editorDidMount) {
      editorDidMount(editor);
    }

    this.props.resetTimeline();
  }

  handleEditorChange = (newValue, event) => {
    // When playing, model.applyEdits triggers onChange
    // event, so verification of isPlaying is required
    // to not add events to timeline
    if (this.props.isPlaying) {
      return;
    }

    const { addEditorChange, startingTime } = this.props;
    const { range, text } = event.changes[0];
    const eventData = {
      edit: { range, text },
      viewState: this.editor.saveViewState(),
    };

    addEditorChange(startingTime, eventData, newValue);
  }

  applyEdits(edits, viewState) {
    const { editor, model } = this;

    try {
      model.applyEdits(edits);
    } catch(err) {
      debugger
    }
    editor.restoreViewState(viewState);
    this.props.setEditorCode(model.getValue());
  }

  componentDidUpdate(prevProps) {
    const { changes, startingTime } = this.props;

    if (prevProps.startingTime !== startingTime) {
      this.initChange();
      return;
    }

    if (!isEqual(prevProps.changes, changes)) {
      this.updateChanges();
    }
  }

  updateChanges() {
    const { changes } = this.props;

    if (changes.length === 0) {
      this.playedIndex = null;
      return;
    }

    const index = this.playedIndex;
    const lastIndex = changes.length - 1;
    const edits = changes.map(c => c.edit);
    const viewState = changes[lastIndex].viewState;

    if (typeof index !== 'number' || index >= lastIndex) {
      this.model.setValue('');
      this.applyEdits(edits, viewState);
      this.playedIndex = lastIndex;

      return;
    }

    this.applyEdits(edits.slice(index + 1), viewState);
    this.playedIndex = lastIndex;
  }

  initChange() {
    // Default code is added to timeline when onChange is triggered
    this.model.applyEdits([{
      range: {
        endColumn: 1,
        endLineNumber: 1,
        startColumn: 1,
        startLineNumber: 1,
      },
      text: this.defaultCode,
    }]);
  }

  render() {
    const { isPlaying } = this.props;
    const options = {
      lineNumbers: 'on',
      readOnly: isPlaying,
      selectOnLineNumbers: true,
    };

    return (
      <MonacoField
        code={this.props.code || ''}
        editorDidMount={this.editorDidMount}
        onChange={this.handleEditorChange}
        options={options}
        height="500"
      />
    );
  }
};

const mapState = state => ({
  changes: fromReducers.getPlayedEventsData(state, 'editor'),
  code: fromReducers.getEditorCode(state),
  isPlaying: fromReducers.getIsPlaying(state),
  startingTime: fromReducers.getStartingTime(state),
});

const mapDispatch = {
  addEditorChange: editorActions.addEditorChange,
  resetTimeline: timelineActions.resetTimeline,
  setEditorCode: editorActions.setEditorCode,
  setIsPlaying: playbackActions.setIsPlaying,
};

export default connect(mapState, mapDispatch)(Editor);
