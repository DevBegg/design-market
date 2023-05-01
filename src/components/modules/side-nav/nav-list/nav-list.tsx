// import { Avatar, ToggleButton } from '@mui/material';
import styles from './nav-list.module.scss';

export const NavList = ({ isNavExpanded }: { isNavExpanded: boolean }) => {
  return <nav className={styles.navList} aria-hidden={isNavExpanded}></nav>;
};
