import Header from 'components/layout/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <div className="max-w-[1280px] min-w-[1100px] mx-auto">
        {children}
        <div id="needLoginPortal" />
      </div>
    </section>
  );
}
