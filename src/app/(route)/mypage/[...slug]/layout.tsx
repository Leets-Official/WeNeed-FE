import Header from 'components/layout/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header type={'main'} isLoggedIn />
      <div className="w-full h-full">{children}</div>
    </section>
  );
}
