import styles from './simple-container.module.scss';

export const SimpleContainer = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.simpleContainer}>{children}</div>;
};
