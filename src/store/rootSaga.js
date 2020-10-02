import {all} from 'redux-saga/effects';
import {userProfileSaga} from './userProfileSaga';

export default function* rootSaga() {
  yield all([...userProfileSaga]);
}