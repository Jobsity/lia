import * as actionTypes from './types';

// Internal functions (not exported)

const classifier = (eventsData, { data, type }) => {
  if (type in eventsData) {
    eventsData[type].push(data);
  } else {
    eventsData[type] = [data];
  }

  return eventsData;
};

const classifyEventsData = (playedEvents) => {
  if (playedEvents.length === 0) {
    return {};
  }

  return playedEvents.reduce(classifier, {});
};

// Exported action creators

export const setPlayedEvents = (playedEvents) => {
  const eventsData = classifyEventsData(playedEvents);

  return {
    type: actionTypes.PLAYBACK_EVENTS_SET,
    payload: {
      eventsData,
      playedEvents
    }
  };
};

export const setIsPlaying = (isPlaying) => ({
  type: actionTypes.PLAYBACK_PLAYING_SET,
  payload: {
    isPlaying
  }
});
