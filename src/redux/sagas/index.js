import { all } from 'redux-saga/effects';
import searchApiSaga from './searchApiSaga';

export default function* rootSaga() {
  yield all([
    searchApiSaga(),
    // watchIncrementAsync()
  ]);
}
