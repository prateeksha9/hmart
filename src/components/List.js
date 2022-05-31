import React from 'react';
import { Card } from '.';

function List({ currencyList }) {
  return (
    <div className="list">
      <div className="currencyCard tableHead" style={{ height: '25px' }}>
        {window.innerWidth > 550 && <div className="email">Rank</div>}
        {/* <img src={currency.avatar} /> */}
        <div className="names" style={{ color: '#A6A6A6' }}>
          Name
        </div>
        <div className="names" style={{ color: '#A6A6A6' }}>
          Price
        </div>
        {window.innerWidth > 550 && (
          <div style={{ color: '#A6A6A6' }}>Market Cap</div>
        )}
        {window.innerWidth > 550 && (
          <div style={{ color: '#A6A6A6' }}>VWAP(24 Hr)</div>
        )}
        {window.innerWidth > 550 && (
          <div style={{ color: '#A6A6A6' }}>Supply</div>
        )}
        {window.innerWidth > 550 && (
          <div style={{ color: '#A6A6A6' }}>Volume(24 Hr)</div>
        )}

        <div style={{ color: '#A6A6A6' }}>(24 Hr)</div>
      </div>
      {currencyList.map((currency, i) => {
        return <Card key={i} currency={currency} />;
      })}
    </div>
  );
}

export default List;
