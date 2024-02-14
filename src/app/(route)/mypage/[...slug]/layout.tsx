import Header from 'components/layout/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header nickname="위니드" userId={1} />
      <div className="w-full h-full relative z-0">{children}</div>
    </section>
  );
}
