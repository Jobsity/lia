import { api } from '../mockServer';

export function fetchChallengeData() {
  return api.get('/challenges/id').catch(err => ({ error: err.toString() }));
}
