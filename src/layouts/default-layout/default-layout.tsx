import { Header } from '@/components';

export const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
