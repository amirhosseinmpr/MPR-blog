import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
const DUMMY_POST = {
  slug: 'Getting-Started-with-NextJS',
  title: 'Getting Started with NextJS',
  image: 'Getting-Started-with-NextJS.png',
  date: '2022-01-24',
  content: '# this is use mark down',
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} imag={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
