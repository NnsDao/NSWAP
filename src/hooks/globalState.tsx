import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isLogin: false,
  address: '',
  loginType: '',
  userICP: BigInt(0),
  count: 0,
};
type ActionType = {
  type: string;
} & typeof initialState;

const StateContext = createContext(null as any);

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'changeLogin':
      return {
        ...state,
        isLogin: action.isLogin,
        address: action.address,
        loginType: action.loginType,
        userICP: action.userICP,
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
