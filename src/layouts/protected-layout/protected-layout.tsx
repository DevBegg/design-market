import { MainBar, SideNav, SimpleContainer } from '@/components';
import { clsx } from 'clsx';
import styles from './protected-layout.module.scss';
import { useSelector } from 'react-redux';
import { layoutSelector } from '@/stores/layout-slice/layout-slice';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const { isNavExpanded } = useSelector(layoutSelector);

  return (
    <div className={styles.root}>
      <SideNav />
      <div className={styles.container}>
        <MainBar isNavExpanded={isNavExpanded} />
        <div
          className={clsx(styles.content, {
            [styles.contentNavClosed]: isNavExpanded,
          })}>
          <main>
            <SimpleContainer>{children}</SimpleContainer>
          </main>
        </div>
      </div>
    </div>
  );
};
