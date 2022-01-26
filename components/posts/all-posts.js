import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPostsPage(props) {
  return (
    <section className={classes.posts}>
      <h1> AllPostsPage</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default AllPostsPage;
