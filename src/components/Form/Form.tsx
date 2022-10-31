import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from 'components/Select/Select';
import {
  setCurrent,
  selectCurrenciesList,
  selectCurrentCurrency,
} from 'features/currencies/currenciesSlice';

import { formatter } from 'utils/formatter';

import type { TCurrency } from 'features/currencies/types';

import styles from './Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();
  const { currencies } = useSelector(selectCurrenciesList);
  const currentCurrency = useSelector(selectCurrentCurrency);
  const [multiplier, setMultiplier] = React.useState(0);
  const [value, setValue] = React.useState<number>(100);

  const handleSelect = React.useCallback(
    (item: string) => {
      dispatch(setCurrent(item));

      let current = currencies.filter(
        (currency: TCurrency) => currency.title === item
      );

      setMultiplier(current[0].value);
    },
    [currencies, dispatch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const output =
    !!currentCurrency &&
    value &&
    formatter(currentCurrency, Number((value * multiplier).toFixed(2)));

  React.useEffect(() => {
    let current = currencies.filter(
      (currency: TCurrency) => currency.title === currentCurrency
    );

    setMultiplier(current[0]?.value);
  }, [currentCurrency, currencies]);

  return (
    <div className={styles.host}>
      <div>
        <label className={styles.label} htmlFor='text'>
          Количество
        </label>
        <input
          className={styles.input}
          id='text'
          type='number'
          value={value}
          onChange={handleChange}
          placeholder='рублей'
        />
      </div>

      {!!currencies && (
        <Select
          options={currencies}
          currentCurrency={currentCurrency}
          onChange={handleSelect}
        />
      )}

      {!!output && <span className={styles.result}>Результат: {output}</span>}
    </div>
  );
};
