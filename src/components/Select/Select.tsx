import React from 'react';

import type { TCurrency } from 'features/currencies/types';

import styles from './Select.module.css';

type TSelectProps = {
  options: TCurrency[];
  onChange: (item: string) => void;
  currentCurrency: string;
};

export const Select: React.FC<TSelectProps> = ({
  options,
  onChange,
  currentCurrency,
}) => {
  const [currentValue, setCurrentValue] = React.useState<string>('RUB');

  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(e.target.value);
    onChange(e.target.value);
  };

  React.useEffect(() => {
    setCurrentValue(currentCurrency);
  }, [currentCurrency]);

  return (
    <div>
      <label className={styles.label} htmlFor='select'>
        Валюта
      </label>
      <select
        id='select'
        className={styles.select}
        value={currentValue}
        onChange={(e) => handleValueChange(e)}
      >
        {options.map((item) => (
          <option key={item.title} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};
