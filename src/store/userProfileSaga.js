import {put, takeEvery, all, call} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import {fetchAllUsers, fetchUser} from "../service/userProfileService";

export function* fetchAllUsersWatcherAsyn(value) {
  try {
    const response = yield call(fetchAllUsers, value.payload);
    if (response.status >= 200 && response.status < 300) {
      const usersList = yield response.data;
      yield put({type: actionTypes.LOAD_ALL_USERS_COMPLETE, payload: usersList});
    } else {
      throw response;
    }
  } catch (error) {
    yield put({type: actionTypes.LOAD_ALL_USERS_ERROR, payload: error});
  }
}

export function* fetchUserWatcherAsyn(value) {
  try {
    const response = yield call(fetchUser, value.payload);
    if (response.status >= 200 && response.status < 300) {
      const userDetails = yield response.data;
      yield put({type: actionTypes.LOAD_USER_COMPLETE, payload: userDetails});
    } else {
      throw response;
    }
  } catch (error) {
    yield put({type: actionTypes.LOAD_USER_ERROR, payload: error});
  }
}


export function* userProfileWatcher() {
  yield all([
    takeEvery(actionTypes.LOAD_ALL_USERS, fetchAllUsersWatcherAsyn),
    takeEvery(actionTypes.LOAD_USER, fetchUserWatcherAsyn),
  ]);
}


export const userProfileSaga = [
    userProfileWatcher(),
];

