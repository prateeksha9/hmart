import React from 'react';
const bitcoin = require('../assets/bitcoin.png');
function Nav(props) {
  return (
    <div className="NavHead">
      <div className="navDiv">
        {window.innerWidth < 550 && (
          <div>
            <img src={bitcoin} />
          </div>
        )}
        <div className="item">Coins</div>
      </div>
      <div className="navDiv">
        {window.innerWidth < 550 && <div></div>}
        <div className="item">Exchange</div>
      </div>
      <div className="navDiv">
        {window.innerWidth < 550 && <div></div>}
        <div className="item">Swap</div>
      </div>
    </div>
  );
}

export default Nav;
