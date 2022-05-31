import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
const menu = require('../assets/menu.png');
const cancel = require('../assets/cancel.png');

function Menu(props) {
  const [showMenu, setshowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const Menu = () => {
    setshowMenu(!showMenu);
    console.log(showMenu);
    if (showMenu) {
      console.log('showingMenuj');
      return <MobileMenu className="showMenu" />;
    }
  };
  return (
    <div className="menu">
      <button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        {!showMenu ? (
          <img src={menu} alt="menu_icon" />
        ) : (
          <img src={cancel} alt="menu_icon" />
        )}
      </button>

      {/* <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? 'simple-popover' : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
      >
        <MobileMenu />
      </Popover> */}
    </div>
  );
}

export default Menu;
