import styles from './article-visit-button.module.scss';

interface ArticleVisitButtonProps {
  text?: string;
}

export const ArticleVisitButton = ({ text = 'visit website' }: ArticleVisitButtonProps) => {
  return (
    <div className={styles.articleVisitButton}>
      <a href="https://google.com">{text}</a>
    </div>
  );
};
