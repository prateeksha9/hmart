import React, { useState } from 'react';
import InfoHeading from './InfoHeading';
const left = require('../assets/left.png');
const down = require('../assets/down.png');
function MobileInfo(props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div className="mobileInfo">
        <div>Market Snapshot</div>
        <div>
          <button
            style={{ border: 0, backgroundColor: 'transparent' }}
            onClick={() => setShowInfo(!showInfo)}
          >
            {!showInfo ? (
              <img src={left} alt="open_menu" className="menuImg" />
            ) : (
              <img src={down} alt="open_menu" className="menuImg" />
            )}
          </button>
        </div>
      </div>
      {showInfo && <InfoHeading />}
    </div>
  );
}

export default MobileInfo;
