import Header from 'components/layout/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header type={'main'} isLoggedIn />
      {children}
    </section>
  );
}
