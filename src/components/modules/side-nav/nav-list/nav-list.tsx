import PushPinIcon from '@mui/icons-material/PushPin';
import styles from './nav-list.module.scss';
import clsx from 'clsx';

interface NavListProps {
  isNavExpanded: boolean;
}

export const NavList = ({ isNavExpanded }: NavListProps) => {
  return (
    <div className={clsx(styles.nav, { [styles.navExpanded]: isNavExpanded })}>
      <nav className={styles.navList} aria-hidden={isNavExpanded}></nav>
      <PushPinIcon className={styles.navPinIcon} />
    </div>
  );
};
