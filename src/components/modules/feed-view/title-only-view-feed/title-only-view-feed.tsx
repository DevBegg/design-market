import styles from './title-only-view-feed.module.scss';
import { TitleOnlyItem } from '../title-only-item';
import { FeedActionIcons } from '../../feed-action-icons';

const TitleOnlyViewFeedHeader = ({ title, image, link }) => {
  return (
    <div className={styles.header}>
      <a className={styles.headerLink} href={link} target="_blank" rel="noopener noreferrer">
        <img className={styles.logo} src={image} alt="Feed logo" />
        <h3 className={styles.title}>{title}</h3>
      </a>
      <FeedActionIcons />
    </div>
  );
};

export const TitleOnlyViewFeed = ({ data }) => {
  return (
    <>
      <TitleOnlyViewFeedHeader
        title={data.feed.title}
        image={data.feed.image}
        link={data.feed.link}
      />
      {data.items.map((item) => (
        <TitleOnlyItem key={item.guid} item={item} source={data.feed.link} />
      ))}
    </>
  );
};
