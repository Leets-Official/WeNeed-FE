import Header from 'components/layout/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <Header type={'main'} isLoggedIn />
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  );
}
