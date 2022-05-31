import React, { useState } from 'react';

function Card({ currency, key }) {
  const [price, setPrice] = useState(Number(currency.priceUsd).toFixed(2));
  const [marketCap, setmarketCap] = useState(
    Number(currency.marketCapUsd).toFixed(2)
  );
  const [vwap, setvwap] = useState(Number(currency.vwap24Hr).toFixed(2));
  const [supply, setsupply] = useState(Number(currency.supply).toFixed(2));
  const [volume, setvolume] = useState(
    Number(currency.volumeUsd24Hr).toFixed(2)
  );
  const [percent, setpercent] = useState(
    Number(currency.changePercent24Hr).toFixed(2)
  );
  //   console.log('here');
  return (
    <div className="currencyCard">
      {window.innerWidth > 550 && <div className="email">{currency.rank}</div>}

      {/* <img src={currency.avatar} /> */}
      <div className="name">
        <div className="image">
          <img
            src={`https://assets.coincap.io/assets/icons/${currency.symbol.toLowerCase()}@2x.png`}
          />
        </div>
        <div>
          <div>{currency.name}</div>
          <div style={{ color: '#A6A6A6' }}>{currency.symbol}</div>
        </div>
        {/* </div> */}
      </div>
      <div className="names">${price}</div>
      {window.innerWidth > 550 && <div className="emails">${marketCap}</div>}
      {window.innerWidth > 550 && <div className="email">${vwap}</div>}
      {window.innerWidth > 550 && <div className="email">{supply}</div>}
      {window.innerWidth > 550 && <div className="email">${volume}</div>}

      {percent < 0 ? (
        <div className="email" style={{ color: 'red' }}>
          {percent}%
        </div>
      ) : (
        <div className="email" style={{ color: 'green' }}>
          {percent}%
        </div>
      )}
    </div>
  );
}

export default Card;
