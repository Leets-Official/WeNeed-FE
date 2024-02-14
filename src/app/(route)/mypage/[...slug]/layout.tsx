import Header from 'components/layout/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header type={'main'} isLoggedIn />
      <div className="w-full h-full relative z-0">{children}</div>
    </section>
  );
}
