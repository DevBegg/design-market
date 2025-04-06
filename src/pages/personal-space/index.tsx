import { ArticleNewsCard } from '@/components';
import { FeedActionIcons } from '@/components/modules/feed-action-icons';
import { TitleOnlyItem } from '@/components/modules/feed-view';
import { SingleNewsMockObject } from '@/constants/mocks';
import { AppLayout } from '@/layouts';
import { layoutSelector } from '@/stores/layout-slice/layout-slice';
import { FeedViewType } from '@/types';
import { useSelector } from 'react-redux';

const ArticleFeedViewContent = () => {
  const { feedView } = useSelector(layoutSelector);

  if (feedView !== FeedViewType.Article) {
    return null;
  }

  return (
    <>
      {SingleNewsMockObject.map((item) => (
        <ArticleNewsCard
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
        />
      ))}
    </>
  );
};

const TitleOnlyFeedViewContent = () => {
  const { feedView } = useSelector(layoutSelector);

  if (feedView !== FeedViewType.TitleOnly) {
    return null;
  }

  return (
    <>
      {SingleNewsMockObject.map((item) => (
        <TitleOnlyItem
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
        />
      ))}
    </>
  );
};

const PersonalSpace = () => {
  return (
    <AppLayout>
      <div>
        <FeedActionIcons />
        <ArticleFeedViewContent />
        <TitleOnlyFeedViewContent />
      </div>
    </AppLayout>
  );
};

export default PersonalSpace;
