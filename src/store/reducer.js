import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_DATA } from './actionTypes';

const defaultState = {
  inputValue: '',
  data: []
}

export default (state = defaultState, action) => {
  // Reducer 只能接收 state, 不能改变 state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.data.push(newState.inputValue);
    newState.inputValue = '';

    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.data.splice(action.index, 1);

    return newState;
  }

  if (action.type === GET_DATA) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.data.inputValue;
    newState.data = action.data.data;

    return newState;
  }

  return state;
}