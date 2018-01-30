import { all, call, put, takeEvery } from 'redux-saga/effects';

import Api from '../lib/api';

import { REQUEST_NEW_FRIEND, FETCH_FRIENDS } from '../constants';
import { addFriendToList, updateFriends } from '../actions/index';

export default function* rootSaga() {
  yield all([fetchUserFromApi(), fetchFriendsFromApi()]);
}

export function* fetchUserFromApi() {
  yield takeEvery(REQUEST_NEW_FRIEND, makeApiRequest);
}

export function* makeApiRequest() {
  const friend = yield call(Api.requestNewFriend);

  yield put(addFriendToList(friend));
}

export function* fetchFriendsFromApi() {
  yield takeEvery(FETCH_FRIENDS, requestAllFriends);
}

export function* requestAllFriends() {
  const friends = yield call(Api.getAll);

  yield put(updateFriends(friends));
}