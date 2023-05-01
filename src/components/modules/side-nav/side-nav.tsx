import { LeftNav } from './left-nav/left-nav';
import { NavList } from './nav-list/nav-list';
import styles from './side-nav.module.scss';
import { toggleNavigation, layoutSelector } from '@/stores/layout-slice/layout-slice';
import { useSelector, useDispatch } from 'react-redux';

export const SideNav = () => {
  const { isNavExpanded } = useSelector(layoutSelector);
  const dispatch = useDispatch();

  return (
    <div className={styles.sideNav}>
      <div className={styles.sideNavWrapper}>
        <LeftNav onToggleButtonClick={() => dispatch(toggleNavigation())} />
        <NavList isNavExpanded={isNavExpanded} />
      </div>
    </div>
  );
};
