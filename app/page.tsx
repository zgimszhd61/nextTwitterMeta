import Layout from './layout';
import { Metadata } from "next";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Next.js App",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Author Name", url: "https://example.com" }],
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    images: ["https://nextjs.org/og.png"],
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

const Home = () => {
  return (
    <Layout>
      <h1>Hello world</h1>
    </Layout>
  );
};

export default Home;
