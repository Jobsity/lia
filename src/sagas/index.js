import { all } from 'redux-saga/effects';
import getChallengeData from './getChallengeData';

export default function* rootSaga() {
  yield all([
    getChallengeData(),
  ]);
}