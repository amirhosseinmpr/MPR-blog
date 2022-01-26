import PostHeader from './post-header';
import classes from './post-content.module.css';
const DUMMY_POST = {
  slug: 'Getting-Started-with-NextJS',
  title: 'Getting Started with NextJS',
  image: 'Next.png',
  date: '2022-01-24',
  content: '# this is use mark down',
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} imag={imagePath} />
    </article>
  );
}

export default PostContent;
