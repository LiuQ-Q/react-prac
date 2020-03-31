import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FruitItem extends Component {
  constructor(props) {
    super(props);
    this.handleItem = this.handleItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <li onClick={this.handleItem}>{ this.props.content }</li>
     );
  }

  handleItem() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}

FruitItem.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

FruitItem.defaultProps = {

}

export default FruitItem;