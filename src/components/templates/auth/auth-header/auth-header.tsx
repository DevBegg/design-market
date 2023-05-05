import styles from './auth-header.module.scss';

import { ApplicationName } from '@/constants';
import { Button } from '@mui/material';
import Link from 'next/link';

export const AuthHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>{ApplicationName}</div>
        <div className={styles.headerActions}>
          <Button className={styles.headerButton} variant="outlined" size="small">
            <Link href="/auth">Login</Link>
          </Button>
          <Button className={styles.headerButton} variant="contained" size="small">
            <Link href="/personal-space">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
