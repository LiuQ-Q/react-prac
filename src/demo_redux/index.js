import React, { Component } from 'react';
import store from '../store';
import { 
  getDataThunk, getDataSaga, changeInputAction, 
  addItemAction, deleteItemAction 
} from '../store/actionCreators';
import DemoReduxUI from './DemoReduxUI';

class DemoRedux extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }

  render() { 
    return ( 
      <DemoReduxUI 
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        data={this.state.data}
        deleteItem={this.deleteItem}
      />
    );
  }

  componentDidMount() {
    // thunk
    // const todoList = getDataThunk();
    // store.dispatch(todoList);
    
    // saga
    const action = getDataSaga();
    store.dispatch(action);
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState);
  }

  clickBtn() {
    const action = addItemAction();
    store.dispatch(action)
  }

  deleteItem(i) {
    const action = deleteItemAction(i);
    store.dispatch(action);
  }
}
 
export default DemoRedux;