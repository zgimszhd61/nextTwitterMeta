import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '你的博客标题',
    template: '%s | 你的博客',
  },
  description: '这是你的博客描述，简要介绍博客内容。',
  openGraph: {
    title: '你的博客标题',
    description: '这是你的博客描述，简要介绍博客内容。',
    url: 'https://blog.uhaka.com',
    siteName: '你的博客',
    images: [
      {
        url: 'https://ppl-ai-public.s3.amazonaws.com/static/img/pplx-default-preview.png',
        width: 1200,
        height: 630,
        alt: '博客封面图',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '你的博客标题',
    description: '这是你的博客描述，简要介绍博客内容。',
    images: [
      'https://ppl-ai-public.s3.amazonaws.com/static/img/pplx-default-preview.png',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <header className="h-12 border-b">头部内容</header>
        <main>{children}</main>
      </body>
    </html>
  );
}