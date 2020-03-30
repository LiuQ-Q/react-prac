import React, { Component, Fragment } from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['基础按摩', '基础按摩2']
    }
  };

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="fuwu">服务:</label>
          <input
            id="fuwu"
            className="input"
            ref={ (input) => {this.input = input} }
            value={ this.state.inputValue }
            onChange={ this.inputChange.bind(this) }
          />
          <button onClick={ this.addList.bind(this) }>增加服务</button>
          <ul>
            {
              this.state.list.map((item, index) => {
                return(
                  <XiaojiejieItem
                    key={index+item}
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                  />
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  };

  inputChange(e) {
    this.setState({
      inputValue: this.input.value
    })
  };

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  };

  deleteItem(index) {
    let listClone = this.state.list;
    listClone.splice(index, 1);
    this.setState({
      list: listClone
    });
  };
}

export default Xiaojiejie;