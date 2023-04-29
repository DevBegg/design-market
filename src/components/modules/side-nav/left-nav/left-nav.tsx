import { Avatar, ToggleButton } from '@mui/material';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import styles from './left-nav.module.scss';

export const LeftNav = () => {
  return (
    <nav className={styles.leftNav}>
      <div>
        <ToggleButton value="list" aria-label="list">
          <ViewHeadlineIcon />
        </ToggleButton>
      </div>
      <div></div>
      <div className={styles.leftNavProfile}>
        <Avatar sx={{ bgcolor: 'orange', width: 34, height: 34 }}>Y</Avatar>
      </div>
    </nav>
  );
};
