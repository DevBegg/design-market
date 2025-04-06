import styles from './title-only-item.module.scss';

interface TitleOnlyItemProps {
  title: string;
  description: string;
  img: string;
}

export const TitleOnlyItem = ({ title }: TitleOnlyItemProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
