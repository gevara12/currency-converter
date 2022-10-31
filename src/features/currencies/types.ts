export type TCurrency = {
  title: string;
  value: number;
  selected: boolean;
};

export type TCurrenciesState = {
  currencies: TCurrency[];
  loading: boolean;
  error?: string;
};

export type TCurrencies = Pick<TCurrenciesState, 'currencies'>;
export type TState = { currencies: TCurrencies };
