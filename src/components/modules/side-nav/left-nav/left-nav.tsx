import { Avatar, ToggleButton } from '@mui/material';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import styles from './left-nav.module.scss';

interface LeftNavProps {
  onToggleButtonClick: () => void;
}

export const LeftNav = ({ onToggleButtonClick }: LeftNavProps) => {
  return (
    <nav className={styles.leftNav}>
      <div>
        <ToggleButton
          className={styles.leftNavToggleBtn}
          value="list"
          aria-label="list"
          onClick={onToggleButtonClick}>
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
