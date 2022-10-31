import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrenciesList } from 'features/currencies/currenciesSlice';
import { TableRow } from 'components/Table/TableRow';

import type { TCurrency } from 'features/currencies/types';

import styles from './Table.module.css';

export const Table: React.FC = () => {
  const { currencies } = useSelector(selectCurrenciesList);

  return (
    <div className={styles.host}>
      <table>
        <thead>
          <tr>
            <th className={styles.firstColumn}>Валюта</th>
            <th>Коэффициент</th>
          </tr>
        </thead>

        <tbody>
          {currencies.map((item: TCurrency) => {
            return <TableRow key={item.title} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
