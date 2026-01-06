import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import KakaoChatButton from './components/layout/KakaoChatButton';
import StickyCountdown from './components/layout/StickyCountdown';

export const metadata: Metadata = {
  metadataBase: new URL('https://modmodernplaying.vercel.app'),
  title: 'MODERN PLAYING | Movement as Play',
  description:
    '모던플레잉은 현대인의 굳은 몸과 눌린 감정을 놀이처럼 움직이며 풀어내는 공간입니다.',
  keywords: ['모던플레잉', '액티브 스트레칭', '현대무용', '마포구', '스트레칭', '다이어트', '헬스', '요가'],
  authors: [{ name: 'MODERN PLAYING' }],
  openGraph: {
    title: 'MODERN PLAYING | Movement as Play',
    description: '모던플레잉은 현대인의 굳은 몸과 눌린 감정을 놀이처럼 움직이며 풀어내는 공간입니다.',
    url: 'https://modmodernplaying.vercel.app',
    siteName: 'MODERN PLAYING',
    images: [
      {
        url: 'https://modmodernplaying.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MODERN PLAYING - Movement as Play',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MODERN PLAYING | Movement as Play',
    description: '모던플레잉은 현대인의 굳은 몸과 눌린 감정을 놀이처럼 움직이며 풀어내는 공간입니다.',
    images: ['https://modmodernplaying.vercel.app/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
