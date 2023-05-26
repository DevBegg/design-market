import { ArticleNewsCard } from '@/components';
import { ProtectedLayout } from '@/layouts';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import type { GetServerSidePropsContext } from 'next';

// temporary stuff
interface SingleNews {
  id: string;
  title: string;
  description: string;
  img: string;
}

const SingleNewsMockObject: SingleNews[] = [
  {
    id: '1',
    title: 'DeFi Needs More Than ‘Synthetic High-Yield Products’: Dragonfly’s Haseeb Qureshi',
    description:
      'The venture capitalist discusses non-ZIRP monetary policy, rebooting crypto’s market structure and why Ponzi bubbles always burst.',
    img: 'https://www.coindesk.com/resizer/4ag4GZAIuMxQbod69r2Zb8jBv2c=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B6YWYLWOPNBGNMUISPLOWA4DVA.jpg',
  },
  {
    id: '2',
    title: 'DeFi Needs More Than ‘Synthetic High-Yield Products’: Dragonfly’s Haseeb Qureshi',
    description:
      'The venture capitalist discusses non-ZIRP monetary policy, rebooting crypto’s market structure and why Ponzi bubbles always burst.',
    img: 'https://www.coindesk.com/resizer/4ag4GZAIuMxQbod69r2Zb8jBv2c=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B6YWYLWOPNBGNMUISPLOWA4DVA.jpg',
  },
];

export default function PersonalSpace() {
  return (
    <ProtectedLayout>
      <div>
        {SingleNewsMockObject.map((item) => (
          <ArticleNewsCard
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </ProtectedLayout>
  );
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/auth?action=signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
