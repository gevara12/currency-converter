import React from 'react';
import { useDispatch } from 'react-redux';

import { Form } from 'components/Form/Form';
import { Table } from 'components/Table/Table';
import { fetchCurrencies } from 'features/currencies/currenciesSlice';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <div className={styles.host}>
      <div className={styles.container}>
        <main>
          <Form />

          <Table />
        </main>
      </div>
    </div>
  );
};

export default App;
