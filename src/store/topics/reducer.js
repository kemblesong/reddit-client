import * as types from './actionTypes'
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  topicsByUrl: undefined,
  selectedTopicUrls: [],
  selectionFinalized: false,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOPICS_FETCHED:
      return state.merge({
        topicsByUrl: action.topicsByUrl
      });
    case types.TOPICS_SELECTED:
      return state.merge({
        selectedTopicUrls: action.selectedTopicUrls
      });
    case types.TOPIC_SELECTION_FINALIZED:
      return state.merge({
        selectionFinalized: true
      });
    default:
      return state;
  }
}

// Selectors

export function getTopics(state) {
  const topicsByUrl = state.topics.topicsByUrl;
  const topicsUrlArray = _.keys(topicsByUrl);
  return [topicsByUrl, topicsUrlArray];
}

export function getSelectedTopicUrls(state) {
  return state.topics.selectedTopicUrls;
}

export function getSelectedTopicsByUrl(state) {
  return _.mapValues(_.keyBy(state.topics.selectedTopicUrls), topicUrl => state.topics.topicsByUrl[topicUrl]);
}

export function isTopicSelectionValid(state) {
  return state.topics.selectedTopicUrls.length === 3;
}

export function isTopicSelectionFinalized(state) {
  return state.topics.selectionFinalized;
}
