import Header from 'components/layout/Header';

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <Header type={'main'} isLoggedIn />
      <div className="max-w-[1280px] min-w-[1100px] mx-auto mt-[27px]">
        {children}
      </div>
    </section>
  );
}
