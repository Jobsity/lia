import { all } from 'redux-saga/effects';
import getChallengeData from './getChallengeData';
import runSampleTests from './runSampleTests';
import submitChallenge from './submitChallenge';

export default function* rootSaga() {
  yield all([
    getChallengeData(),
    runSampleTests(),
    submitChallenge(),
  ]);
}