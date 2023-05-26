import { Logout, Settings } from '@mui/icons-material';
import { Divider, ListItemIcon, MenuItem } from '@mui/material';
import { signOut } from 'next-auth/react';

export const AvatarMenuList = () => {
  const handleClose = () => {
    return null;
  };

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => signOut()}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
};
