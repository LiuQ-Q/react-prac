import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_DATA, GET_DATA_SAGA } from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getDataAction = (data) => ({
  type: GET_DATA,
  data
})

export const getDataThunk = () => {
  return (dispatch) => {
    axios.get('https://api.myjson.com/bins/d9gn8')
    .then((res) => {
      const data = res.data;
      const action = getDataAction(data);
      dispatch(action);
    })
  }
}

export const getDataSaga = () => ({
  type: GET_DATA_SAGA
})