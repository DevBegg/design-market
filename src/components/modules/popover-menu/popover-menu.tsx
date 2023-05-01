import styles from './popover-menu.module.scss';
import { Menu } from '@mui/material';
import React, { useState } from 'react';

interface PopoverMenuProps {
  component: JSX.Element;
  menuItems: JSX.Element;
}

export const PopoverMenu = ({ component, menuItems }: PopoverMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={styles.popoverMenu} onClick={handleClick}>
        {component}
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        disableScrollLock={true}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        {menuItems}
      </Menu>
    </>
  );
};
