import { ArticleNewsCard } from '@/components';
import { FeedActionIcons } from '@/components/modules/feed-action-icons';
import { TitleOnlyViewFeed } from '@/components/modules/feed-view';
import { AppLayout } from '@/layouts';
import { useGetTestRssQuery } from '@/stores/api';
import { layoutSelector } from '@/stores/layout-slice/layout-slice';
import { FeedViewType } from '@/types';
import { useSelector } from 'react-redux';

const ArticleFeedViewContent = ({ data }) => {
  const { feedView } = useSelector(layoutSelector);

  if (feedView !== FeedViewType.Article) {
    return null;
  }

  return (
    <>
      <FeedActionIcons />
      {data.items.map((item) => (
        <ArticleNewsCard
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img || item.enclosure?.link || ''}
        />
      ))}
    </>
  );
};

const TitleOnlyFeedViewContent = ({ data }) => {
  const { feedView } = useSelector(layoutSelector);

  if (feedView !== FeedViewType.TitleOnly) {
    return null;
  }

  return <TitleOnlyViewFeed data={data} />;
};

const PersonalSpace = () => {
  const { data, isLoading } = useGetTestRssQuery();

  if (isLoading) {
    return (
      <AppLayout>
        <p>Loading...</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div>
        <ArticleFeedViewContent data={data} />
        <TitleOnlyFeedViewContent data={data} />
      </div>
    </AppLayout>
  );
};

export default PersonalSpace;
