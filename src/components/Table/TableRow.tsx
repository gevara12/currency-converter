import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { setCurrent } from 'features/currencies/currenciesSlice';

import styles from './Table.module.css';

import type { TCurrency } from 'features/currencies/types';

type TTableRowProps = {
  item: TCurrency;
};

export const TableRow: React.FC<TTableRowProps> = ({ item }) => {
  const { title, value, selected } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrent(title));
  };

  return (
    <tr>
      <td className={styles.firstColumn}>
        <button
          className={classnames(styles.tableBtn, {
            [styles.selected]: selected,
          })}
          onClick={handleClick}
        >
          {title}
        </button>
      </td>
      <td>{value}</td>
    </tr>
  );
};
