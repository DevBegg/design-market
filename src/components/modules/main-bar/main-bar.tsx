import styles from './main-bar.module.scss';
import { ApplicationName } from '@/constants';

export const MainBar = () => {
  return (
    <div className={styles.mainBar}>
      <div className={styles.mainBarWrapper}>{ApplicationName}</div>
    </div>
  );
};
