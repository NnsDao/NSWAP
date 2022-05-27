import React, { createContext, useContext, useReducer } from 'react';
import storage from '../common/storage';

const initialState = {
  isLogin: false,
  address: '',
  loginType: storage.get('loginType'),
  count: 0,
};
const StateContext = createContext(null as any);

const reducer = (state: typeof initialState, action: { type: any; isLogin?: any; address?: any }) => {
  switch (action.type) {
    case 'changeLogin':
      return {
        ...state,
        isLogin: action.isLogin,
        address: action.address,
      };

    default:
      return {
        ...state,
        count: state.count + 1,
      };
  }
};

// @ts-ignore
const GlobalStateProvider = ({ children }) => {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
};
export default GlobalStateProvider;

export const useGlobalState = () => useContext(StateContext);
