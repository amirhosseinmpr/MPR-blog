import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>welcome to Mpr blogs</title>
        <meta
          name='descriptions'
          content=' I post about programing and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps(props) {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
