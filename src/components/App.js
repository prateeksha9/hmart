import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import InfoHead from '.';
import { InfoHead, List } from '.';
import fetchCurrency from '../action/currency';
import Header from './Header';

function App() {
  const perPage = 50;
  const [totalPages, setTotalPages] = useState(2);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserList = () => {
      dispatch(fetchCurrency(perPage, page));
    };
    getUserList();
  }, [page]);

  const currencyList = useSelector((state) => state.currency);

  return (
    <div className="App">
      <Header />
      <InfoHead />
      <List currencyList={currencyList} />

      <div className="clearfix"></div>
      {totalPages !== page && (
        <button className="btn-load-more" onClick={() => setPage(page + 1)}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default App;
