import { combineReducers } from 'redux';

import editorReducer, * as fromEditor from './editor';
import playbackReducer, * as fromPlayback from './playback';

export default combineReducers({
  editor: editorReducer,
  playback: playbackReducer,
  temp: () => {return {}}
});

// Editor getters

export const getEditorChanges = state =>
  fromEditor.getChanges(state.editor);

export const getEditorCode = state =>
  fromEditor.getCode(state.editor);


// Playback getters

export const getIsPlaying = state =>
  fromPlayback.getIsPlaying(state.playback);

export const getStartingTime = state =>
  fromPlayback.getStartingTime(state.playback);
