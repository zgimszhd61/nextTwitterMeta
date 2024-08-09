import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>我的应用程序</title>
        <meta name="description" content="这是一个示例应用程序" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="我的应用程序" />
        <meta name="twitter:description" content="这是一个示例应用程序" />
        <meta name="twitter:image" content="https://ppl-ai-public.s3.amazonaws.com/static/img/pplx-default-preview.png" />
        <meta name="twitter:site" content="@seclink" />
      </Head>
      <h1>Hello world</h1>
    </>
  );
};

export default Home;