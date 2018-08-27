import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import * as fromReducers from '../../reducers';
import * as editorActions from '../../actions/editor';
import * as playbackActions from '../../actions/playback';
import * as timelineActions from '../../actions/timeline';

import MonacoField from '../MonacoField/MonacoField';

class Editor extends Component {
  defaultCode = '';

  editor = null;

  model = null;

  playedIndex = null;

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
    // model.setValue() and model.applyEdits() trigger
    // onChange event, so change must be ignored
    if (this.props.playbackWasInteracted) {
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

    // In monaco editor overlapping ranges are not allowed,
    // because of that, edits are individually applied.
    // Performance can be improved by groupping edits with
    // no overlapping.
    edits.forEach(e => model.applyEdits([e]));

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
      this.props.setEditorCode('');
      this.playedIndex = null;
      return;
    }

    const { playedIndex } = this;
    const lastIndex = changes.length - 1;
    const edits = changes.map(c => c.edit);
    const viewState = changes[lastIndex].viewState;

    if (typeof playedIndex !== 'number' || playedIndex >= lastIndex) {
      this.model.setValue('');
      this.applyEdits(edits, viewState);
      this.playedIndex = lastIndex;

      return;
    }

    this.applyEdits(edits.slice(playedIndex + 1), viewState);
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
    const options = {
      lineNumbers: 'on',
      readOnly: this.props.playbackWasInteracted,
      selectOnLineNumbers: true,
    };

    return (
      <MonacoField
        code={this.props.code || ''}
        editorDidMount={this.editorDidMount}
        language={this.props.language}
        onChange={this.handleEditorChange}
        options={options}
        height="500"
      />
    );
  }
};

const mapState = state => ({
  changes: fromReducers.getEditorChanges(state),
  code: fromReducers.getEditorCode(state),
  language: fromReducers.getLanguage(state),
  startingTime: fromReducers.getStartingTime(state),
  playbackWasInteracted: fromReducers.getPlaybackWasInteracted(state),
});

const mapDispatch = {
  addEditorChange: editorActions.addEditorChange,
  resetTimeline: timelineActions.resetTimeline,
  setEditorCode: editorActions.setEditorCode,
  setIsPlaying: playbackActions.setIsPlaying,
};

export default connect(mapState, mapDispatch)(Editor);
