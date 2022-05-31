import React from 'react';
import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';

function Header(props) {
  return (
    <div className="header">
      {window.innerWidth > 550 ? <WebHeader /> : <MobileHeader />}
    </div>
  );
}

export default Header;
