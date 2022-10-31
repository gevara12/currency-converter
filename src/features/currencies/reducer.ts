import React from 'react';

export const StoreContext = React.createContext(null);

type TAction = { type: 'GET_ITEMS' } | { type: 'SET_CURRENT' };

export type TCurrency = {
  title: string;
  value: unknown;
  selected: boolean;
};

export type TCurrenciesState = {
  currencies: TCurrency[];
  isSet: boolean;
};

export const actions = {
  SET_CURRENT: 'SET_CURRENT',
};

export const createAction = (type: string, payload: unknown) => {
  return {
    type,
    payload,
  };
};

export const reducer = (state: TCurrenciesState, action: TAction) => {
  switch (action.type) {
    case actions.SET_CURRENT: {
      return { ...state, currencies: state.currencies, isSet: false };
    }

    default:
      return state;
  }
};
