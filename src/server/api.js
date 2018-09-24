import { api } from './mockServer';

export function fetchChallengeData() {
  return api.get('/challenges/id').catch(err => ({ error: err.toString() }));
}

export function fetchSessionData(token) {
  return api.get(`/${token}`).catch(err => ({ error: err.toString() }));
}

export function runTests(data) {
  return api.post('/test', data).catch(err => ({ error: err.toString() }));
}

export function submitChallengeData(data) {
  return api.post('/submit', data).catch(err => ({ error: err.toString() }));
}