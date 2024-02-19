import Header from 'components/layout/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="max-w-[1280px] min-w-[1100px] mx-auto">{children}</div>
    </section>
  );
}
