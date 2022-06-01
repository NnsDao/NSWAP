import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  tokenItem: null,
  selectToken: () => ({}),
};
const StateContext = createContext(null as any);

const reducer = (state: any, action: { type: any; value: any }) => {
  switch (action.type) {
    case 'setToken':
      return {
        ...state,
        tokenItem: action.value,
      };
    case 'selectToken':
      return {
        ...state,
        selectToken: action.value,
      };
  }
};
// @ts-ignore
const SwapState = ({ children }) => {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
};
export default SwapState;

export const useSwapState = () => useContext(StateContext);
