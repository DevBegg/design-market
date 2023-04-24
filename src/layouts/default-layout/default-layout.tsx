import { Header } from '@/components';

export const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};
