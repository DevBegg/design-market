import { SideNav, SimpleContainer } from '@/components';
import { clsx } from 'clsx';
import styles from './app-layout.module.scss';
import { useSelector } from 'react-redux';
import { layoutSelector } from '@/stores/layout-slice/layout-slice';

export const AppLayout = ({ children }: { children: JSX.Element }) => {
  const { isNavExpanded } = useSelector(layoutSelector);

  return (
    <div className={styles.appLayout}>
      <SideNav />
      <div className={styles.appLayoutContainer}>
        <div
          className={clsx(styles.appLayoutContent, {
            [styles.appLayoutContentNavClosed]: isNavExpanded,
          })}>
          <main>
            <SimpleContainer>{children}</SimpleContainer>
          </main>
        </div>
      </div>
    </div>
  );
};
