export default function UserinfoSetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="bg-login w-screen h-screen bg-cover bg-no-repeat bg-fixed overflow-hidden">
        {children}
      </div>
    </main>
  );
}
