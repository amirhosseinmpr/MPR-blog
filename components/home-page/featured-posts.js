import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

function featuredPosts(props) {
  return (
    <section className={classes.latest}>
      <h2> certificate</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default featuredPosts;
