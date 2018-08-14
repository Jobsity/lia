import { combineReducers } from 'redux';

import challenge from './challenge';
import editor, * as fromEditor from './editor';
import evaluation from './evaluation';
import playback, * as fromPlayback from './playback';
import session from  './session';
import timeline from  './timeline';

export default combineReducers({
  challenge,
  editor,
  evaluation,
  playback,
  session,
  timeline,
});

// Editor getters

export const getEditorCode = state =>
  fromEditor.getCode(state.editor);


// Playback getters

export const getIsPlaying = state =>
  fromPlayback.getIsPlaying(state.playback);

export const getStartingTime = state =>
  fromPlayback.getStartingTime(state.playback);



  // TODO
export const getEditorChanges = state =>
fromEditor.getChanges(state.editor);