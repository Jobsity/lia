import { combineReducers } from 'redux';

import challenge, * as fromChallenge from './challenge';
import editor, * as fromEditor from './editor';
import evaluation from './evaluation';
import playback, * as fromPlayback from './playback';
import session, * as fromSession from  './session';
import output, * as fromOutput from './output';
import timeline, * as fromTimeline from  './timeline';

export default combineReducers({
  challenge,
  editor,
  evaluation,
  playback,
  session,
  output,
  timeline,
});


// Editor getters

export const getEditorCode = state =>
  fromEditor.getCode(state.editor);


// Playback getters

export const getIsPlaying = state =>
  fromPlayback.getIsPlaying(state.playback);

export const getPlayedEvents = state =>
  fromPlayback.getPlayedEvents(state.playback);


// Timeline getters

export const getTimelineEvents = state =>
  fromTimeline.getEvents(state.timeline);

export const getStartingTime = state =>
  fromTimeline.getStartingTime(state.playback);

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

// Custom getters
export const getPlayedEventsData = (state, type = null) => {
  let playedEvents = getPlayedEvents(state);

  if (typeof type === 'string' && type.length > 0) {
    playedEvents = playedEvents.filter(e => e.type === type);
  }

  return playedEvents.map(e => e.data);
}
