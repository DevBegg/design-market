import clsx from 'clsx';
import styles from './main-bar.module.scss';
import { ApplicationName } from '@/constants';

export const MainBar = ({ isNavExpanded }: { isNavExpanded: boolean }) => {
  return (
    <div
      className={clsx(styles.mainBar, {
        [styles.mainBarWithNav]: isNavExpanded,
      })}>
      <div className={styles.mainBarWrapper}>{ApplicationName}</div>
    </div>
  );
};
