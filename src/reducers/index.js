import { combineReducers } from 'redux';

import challenge, * as fromChallenge from './challenge';
import editor, * as fromEditor from './editor';
import evaluation from './evaluation';
import playback, * as fromPlayback from './playback';
import session, * as fromSession from  './session';
import output, * as fromOutput from './output';

export default combineReducers({
  challenge,
  editor,
  evaluation,
  playback,
  session,
  output,
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

// Challenge getters

export const getDifficulty = state =>
  fromChallenge.getDifficulty(state.challenge);

export const getErrors = state =>
  fromChallenge.getError(state.challenge);

export const getIsLoading = state =>
  fromChallenge.getIsLoading(state.challenge);

export const getLanguages = state =>
  fromChallenge.getLanguages(state.challenge);

export const getScore = state =>
  fromChallenge.getScore(state.challenge);

export const getStats = state =>
  fromChallenge.getStats(state.challenge);

export const getTestSuite = state =>
  fromChallenge.getTestSuite(state.challenge);

export const getCurrentTests = state =>
  fromChallenge.getCurrentTests(state.challenge);

// Output Getters
export const getTestsResults = state =>
  fromOutput.getTestsResults(state.output);

// Session getters
export const getLanguage = state =>
  fromSession.getLanguage(state.session);
