import { combineReducers } from '@reduxjs/toolkit';

import currenciesReducer from 'features/currencies/currenciesSlice';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
