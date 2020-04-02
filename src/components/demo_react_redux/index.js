import React, { Component } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { 
  getDataThunk, getDataSaga, changeInputAction, 
  addItemAction, deleteItemAction 
} from '../../store/actionCreators';

const DemoReactRedux = (props) => {
  let { inputValue, data, inputChange, addItem, deleteItem } = props;
  return (
    <div>
      <div>
        <input 
          value={inputValue}
          onChange={inputChange}
        ></input>
        <button onClick={addItem}>增加</button>
      </div>
      <ul>
        {
          data.map((item, index) => {
            return (
              <li 
                key={index + item}
                onClick={() => {deleteItem(index)}}
              >{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    data: state.data
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = changeInputAction(e.target.value);
      store.dispatch(action);
    },
    addItem() {
      const action = addItemAction();
      store.dispatch(action);
    },
    deleteItem(index) {
      const action = deleteItemAction(index);
      store.dispatch(action);
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(DemoReactRedux);