import { LeftNav } from './left-nav/left-nav';
import styles from './side-nav.module.scss';

export const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <div className={styles.sideNavWrapper}>
        <LeftNav />
      </div>
    </div>
  );
};
