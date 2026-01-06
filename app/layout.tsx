import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import KakaoChatButton from './components/layout/KakaoChatButton';
import StickyCountdown from './components/layout/StickyCountdown';

export const metadata: Metadata = {
  title: 'MODERN PLAYING | Movement as Play',
  description:
    '모던플레잉은 현대인의 굳은 몸과 눌린 감정을 놀이처럼 움직이며 풀어내는 공간입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyCountdown />
        <KakaoChatButton />
      </body>
    </html>
  );
}
