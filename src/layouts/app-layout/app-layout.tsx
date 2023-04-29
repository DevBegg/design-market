import { MainBar, SideNav } from '@/components';
import styles from './app-layout.module.scss';

export const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.appLayout}>
      <SideNav />
      <div className={styles.appLayoutContainer}>
        <MainBar />
        <main className={styles.appLayoutContent}>{children}</main>
      </div>
    </div>
  );
};
