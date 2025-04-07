import styles from './title-only-item.module.scss';
import React from 'react';

interface TitleOnlyItemProps {
  item: {
    title: string;
    author: string;
    pubDate: string;
  };
  source?: string;
}

export const TitleOnlyItem: React.FC<TitleOnlyItemProps> = ({ item, source }) => {
  const onArticleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(item);
  };

  return (
    <article className={styles.root} onClick={onArticleClick}>
      <div className={styles.name}>
        <a href={source} target="_blank">
          {item.author}
        </a>
      </div>
      <div style={{ width: '45px' }} />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.date}>{item.pubDate}</div>
    </article>
  );
};
