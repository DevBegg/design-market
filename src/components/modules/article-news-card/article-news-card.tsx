import { ArticleCard, ArticleVisitButton } from '@/components/elements';
import styles from './article-news-card.module.scss';

interface ArticleNewsCardProps {
  title: string;
  description: string;
  img: string;
}

export const ArticleNewsCard = ({ title, description, img }: ArticleNewsCardProps) => {
  return (
    <ArticleCard>
      <div className={styles.root}>
        <h3>{title}</h3>
        <div className={styles.imageWrapper}>
          {/* eslint-disable-next-line */}
          <img src={img} alt="" />
        </div>
        <p>{description}</p>
        <ArticleVisitButton />
      </div>
    </ArticleCard>
  );
};
