import { combineReducers } from 'redux';

import challenge from './challenge';
import editor, * as fromEditor from './editor';
import evaluation from './evaluation';
import playback, * as fromPlayback from './playback';
import session from  './session';
import timeline, * as fromTimeline from  './timeline';

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

export const getPlayedEvents = state =>
  fromPlayback.getPlayedEvents(state.playback);


// Timeline getters

export const getTimelineEvents = state =>
  fromTimeline.getEvents(state.timeline);

export const getStartingTime = state =>
  fromTimeline.getStartingTime(state.timeline);


// Custom getters
export const getPlayedEventsData = (state, type = null) => {
  let playedEvents = getPlayedEvents(state);

  if (typeof type === 'string' && type.length > 0) {
    playedEvents = playedEvents.filter(e => e.type === type);
  }

  return playedEvents.map(e => e.data);
}
