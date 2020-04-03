import React, { useContext } from 'react';
import { ColorContext } from './Color';

function ColorText() {
  const { color } = useContext(ColorContext);
  return (
    <div>
      <p style={{color:color}}>当前的颜色为{color}</p>
    </div>
  );
}
 
export default ColorText;