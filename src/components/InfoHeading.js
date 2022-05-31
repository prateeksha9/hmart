import React from 'react';

function InfoHeading(props) {
  return (
    <div className="infoHeading">
      <div>
        <div>MARKET CAP</div>
        <div style={{ fontSize: '1.3em' }}>$1.77T</div>
      </div>
      {window.innerWidth < 550 && <hr className="headRow" />}
      <div>
        <div>EXCHANGE VOL</div>
        <div style={{ fontSize: '1.3em' }}>$68.61B</div>
      </div>
      {window.innerWidth < 550 && <hr className="headRow" />}
      <div>
        <div>ASSETS</div>
        <div style={{ fontSize: '1.3em' }}>2,295</div>
      </div>
      {window.innerWidth < 550 && <hr className="headRow" />}
      <div>
        <div>EXCHANGES</div>
        <div style={{ fontSize: '1.3em' }}>73</div>
      </div>
      {window.innerWidth < 550 && <hr className="headRow" />}
      <div>
        <div>MARKETS</div>
        <div style={{ fontSize: '1.3em' }}>15,761</div>
      </div>
      {window.innerWidth < 550 && <hr className="headRow" />}
      <div>
        <div>BTC DOM INDEX</div>
        <div style={{ fontSize: '1.3em' }}>33.9%</div>
      </div>
    </div>
  );
}

export default InfoHeading;
