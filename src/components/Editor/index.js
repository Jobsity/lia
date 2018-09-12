import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import * as fromReducers from '../../reducers';
import * as editorActions from '../../actions/editor';
import * as playbackActions from '../../actions/playback';
import * as timelineActions from '../../actions/timeline';

import MonacoField from '../MonacoField/MonacoField';

class Editor extends Component {
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

  addInitChange() {
    const { addEditorChange, defaultCode, startingTime } = this.props;
    const eventData = {
      edit: {
        range: this.model.getFullModelRange(),
        text: defaultCode,
      },
      viewState: null,
    };

    addEditorChange(startingTime, eventData, defaultCode);
  }

  applyEdits(edits, viewState) {
    const { editor, model } = this;

    // In monaco editor overlapping ranges are not allowed,
    // because of that, edits are individually applied.
    // Performance can be improved by groupping edits with
    // no overlapping.
    edits.forEach(e => model.applyEdits([e]));

    if (viewState) {
      editor.restoreViewState(viewState);
    }
    this.props.setEditorCode(model.getValue());
  }

  componentDidUpdate(prevProps) {
    const { changes, language, resetCounter, startingTime } = this.props;

    if (
      prevProps.startingTime !== startingTime
      || prevProps.resetCounter !== resetCounter
      || prevProps.language !== language
    ) {
      this.addInitChange();
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

  render() {
    const { playbackWasInteracted, role } = this.props;
    const options = {
      lineNumbers: 'on',
      readOnly: playbackWasInteracted || role !== 'candidate',
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
  defaultCode: 'asdasfdasfd\nasd',
  language: fromReducers.getLanguage(state),
  startingTime: fromReducers.getStartingTime(state),
  playbackWasInteracted: fromReducers.getPlaybackWasInteracted(state),
  resetCounter: fromReducers.getEditorResetCounter(state),
  role: fromReducers.getUser(state).role,
});

const mapDispatch = {
  addEditorChange: editorActions.addEditorChange,
  resetTimeline: timelineActions.resetTimeline,
  setEditorCode: editorActions.setEditorCode,
  setIsPlaying: playbackActions.setIsPlaying,
};

export default connect(mapState, mapDispatch)(Editor);
