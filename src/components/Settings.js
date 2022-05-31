import React from 'react';
const settings = require('../assets/settings.png');
function Settings(props) {
  return (
    <div className="settings">
      <div>
        <img src={settings} alt="setting_icon" />
      </div>
      <div>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Settings;
