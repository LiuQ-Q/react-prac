import React, {useContext} from 'react';
import { ColorContext } from './Color';

function ColorBtn() {
  const { dispatch } = useContext(ColorContext);

  return (
    <div>
      <button onClick={() => {dispatch({type:'UPDATE_COLOR', color:'red'})}}>红</button>
      <button onClick={() => {dispatch({type:'UPDATE_COLOR', color:'yellow'})}}>黄</button>
      <button onClick={() => {dispatch({type:'UPDATE_COLOR', color:'blue'})}}>蓝</button>
    </div>
  );
}
 
export default ColorBtn;