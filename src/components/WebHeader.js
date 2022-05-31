import React from 'react';
import HeaderLogo from './HeaderLogo';
import Nav from './Nav';
import Search from './Search';
import Settings from './Settings';

function WebHeader(props) {
  return (
    <div className="MainHeadWeb">
      <div>
        <Nav />
      </div>
      <div>
        <HeaderLogo />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
}

export default WebHeader;
