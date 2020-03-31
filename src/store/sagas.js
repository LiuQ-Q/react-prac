import { takeEvery, put } from 'redux-saga/effects';
import { GET_DATA_SAGA } from './actionTypes';
import { getDataAction } from './actionCreators';
import axios from 'axios';

function* mySaga() {
  yield takeEvery(GET_DATA_SAGA, getData);
}

function* getData() {
  const res = yield axios.get('https://api.myjson.com/bins/d9gn8');
  const action = getDataAction(res.data);
  yield put(action);
}

export default mySaga;