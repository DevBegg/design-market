import styles from './article-card.module.scss';

export const ArticleCard = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.articleCard}>{children}</div>;
};
