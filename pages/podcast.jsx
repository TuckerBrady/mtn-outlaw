import Head from 'next/head';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>MTN Outlaws</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>this is the Podcast page</h1>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}