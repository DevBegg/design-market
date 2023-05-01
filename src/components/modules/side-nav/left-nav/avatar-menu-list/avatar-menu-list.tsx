import { Logout, Settings } from '@mui/icons-material';
import { Divider, ListItemIcon, MenuItem } from '@mui/material';
import Link from 'next/link';

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
      <MenuItem>
        <Link href="/">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </Link>
      </MenuItem>
    </>
  );
};
