import React from 'react';

const coincap = require('../assets/coincap.png');

function HeaderLogo(props) {
  return (
    <div className="headerLogo">
      <img src={coincap} />
    </div>
  );
}

export default HeaderLogo;
