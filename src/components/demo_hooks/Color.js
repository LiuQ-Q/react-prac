import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext();

export function Color(props) {
  const [color, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_COLOR':
        return action.color;
      default:
        return state;
    }
  }, '#ccc')

  return (
    <ColorContext.Provider value={{color, dispatch}}>
      { props.children }
    </ColorContext.Provider>
  )
}