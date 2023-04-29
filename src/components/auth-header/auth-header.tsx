import styles from './auth-header.module.scss';

import { ApplicationName } from '@/constants';
import { Button } from '@mui/material';

export const AuthHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>{ApplicationName}</div>
        <div className={styles.headerActions}>
          <Button className={styles.headerButton} variant="outlined" size="small">
            Login
          </Button>
          <Button className={styles.headerButton} variant="contained" size="small">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
