import React from 'react';
import Nav from './Nav';
import Settings from './Settings';

function MobileMenu(props) {
  console.log('HERRRRRRRRRR');
  return (
    <div className="MainHeadMobile">
      <div>
        <Nav />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
}

export default MobileMenu;
