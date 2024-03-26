import type { Metadata } from 'next';
import '../ui/globals.css';
import RecoilProvider from 'context/RecoilProvider';

export const metadata: Metadata = {
  title: '위닛',
  description: 'We need, Win it!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-black min-h-screen min-w-[800px] mx-auto">
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
