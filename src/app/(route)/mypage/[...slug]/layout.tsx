import Header from 'components/layout/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black max-h-[1040px]">
      <div className="min-w-[850px] min-h-[690px] mx-auto">{children}</div>
    </section>
  );
}
