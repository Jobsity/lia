import { combineReducers } from 'redux';

import challenge from './challenge';
import editor, * as fromEditor from './editor';
import evaluation from './evaluation';
import playback, * as fromPlayback from './playback';
import session from  './session';

export default combineReducers({
  challenge,
  editor,
  evaluation,
  playback,
  session,
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
