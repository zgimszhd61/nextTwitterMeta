import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title="我的应用程序"
        description="这是一个示例应用程序"
        twitter={{
          cardType: 'summary_large_image',
          site: '@seclink',
        }}
        openGraph={{
          images: [
            {
              url: 'https://ppl-ai-public.s3.amazonaws.com/static/img/pplx-default-preview.png',
            },
          ],
        }}
      />
      <h1>Hello world</h1>
    </>
  );
};

export default Home;
