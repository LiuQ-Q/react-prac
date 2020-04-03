import React, { useContext } from 'react';
import { countContext } from './index';

function Item() {
  const value = useContext(countContext);

  return (
    <div>
      <p>{ value.count }</p>
      <button onClick={()=>{value.setCount(value.count+1)}}>+</button>
      <button onClick={()=>{value.setCount(value.count-1)}}>-</button>
    </div>
  )
}
 
export default Item;