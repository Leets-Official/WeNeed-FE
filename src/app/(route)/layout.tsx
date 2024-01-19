import type { Metadata } from 'next';
import '../ui/globals.css';
import RecoilProvider from 'context/RecoilProvider';

export const metadata: Metadata = {
  title: '위닛',
  description: 'We need, Win it!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen min-w-[850px] mx-auto">
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
