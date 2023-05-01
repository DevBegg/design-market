import PushPinIcon from '@mui/icons-material/PushPin';
import styles from './nav-list.module.scss';

interface NavListProps {
  isNavExpanded: boolean;
}

export const NavList = ({ isNavExpanded }: NavListProps) => {
  return (
    <div className={styles.nav}>
      <nav className={styles.navList} aria-hidden={isNavExpanded}></nav>
      <PushPinIcon className={styles.navPinIcon} />
    </div>
  );
};
