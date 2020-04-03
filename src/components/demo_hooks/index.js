import React, { useState, useEffect, createContext, useReducer } from 'react';
import CountItem from './CountItem';
import ColorTextItem from './ColorTextItem';
import ColorBtnItem from './ColorBtnItem';
import ColorBtn from './ColorBtnItem';
import { Color } from './Color';

export const countContext = createContext();

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count is ${count}`);
    return () => {
      console.log(`component unmount`);
    }
  }, [count]);

  return (
    <div>
      <p>子父传值</p>
      <countContext.Provider value={{count, setCount}}>
        <CountItem />
      </countContext.Provider>

      <p>类 rudux</p>
      <Color>
        <ColorTextItem />
        <ColorBtn />
      </Color>
    </div>
  )
}

export default Example;