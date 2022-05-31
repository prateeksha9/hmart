import React from 'react';

import HeaderLogo from './HeaderLogo';
import Menu from './Menu';
import Search from './Search';

function MobileHeader(props) {
  return (
    <div className="MainHeadMobile">
      <div>
        <Search />
      </div>
      <div>
        <HeaderLogo />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default MobileHeader;
