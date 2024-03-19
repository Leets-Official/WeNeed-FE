export default function MypageAppRecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <div className="min-w-[850px] h-screen min-h-[690px] mx-auto">
        {children}
      </div>
    </section>
  );
}
