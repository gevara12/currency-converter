import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { MOCK_DATA } from './mocks';

import type {
  TCurrency,
  TCurrenciesState,
  TState,
} from 'features/currencies/types';

// Actions
export const fetchCurrencies = createAsyncThunk(
  'currencies/getCurrencies',
  async (thunkAPI) => {
    const response = await fetch(
      'https://v6.exchangerate-api.com/v6/2b029f47befc226447f04cbf/latest/RUB'
    ).then((data) => data.json());

    return response.conversion_rates;
    // return MOCK_DATA;
  }
);

// Selectors
export const selectCurrenciesList = (state: TState) => state.currencies;
export const selectCurrentCurrency = (state: TState) => {
  const selected = state.currencies.currencies.filter(
    (item: TCurrency) => item.selected === true
  )[0];
  return selected?.title;
};

const initialState: TCurrenciesState = {
  currencies: [
    { title: 'RUB', value: 1, selected: true },
    { title: 'AUD', value: 1.4817, selected: false },
  ],
  loading: false,
};

const currenciesSlice = createSlice({
  initialState,
  name: 'currencies',
  reducers: {
    setCurrent: (state, action) => {
      const tranformedArr = state.currencies.map((item) => {
        if (item.title !== action.payload) {
          return { ...item, selected: false };
        }

        return { ...item, selected: !item.selected };
      });
      state.currencies = tranformedArr;
    },
  },
  extraReducers: {
    // @ts-ignore
    [fetchCurrencies.pending]: (state: TCurrenciesState) => {
      state.loading = true;
    },
    // @ts-ignore
    [fetchCurrencies.fulfilled]: (
      state: TCurrenciesState,
      action: PayloadAction<TCurrency>
    ) => {
      const currencies = action.payload;
      const transformedCurr = Object.entries(currencies).map(
        ([title, value]) => {
          return { title, value, selected: false };
        }
      );

      state.loading = false;
      // @ts-ignore
      state.currencies = transformedCurr;
    },
    // @ts-ignore
    [fetchCurrencies.rejected]: (state: TCurrenciesState) => {
      state.loading = false;
      state.error = state.error =
        'Что-то пошло не так. За помощью обратитесь в наш контакт центр contact@finance.com';
    },
  },
});

export const { setCurrent } = currenciesSlice.actions;
export default currenciesSlice.reducer;
