import AllPosts from '../../components/posts/all-posts';

const Dummy_POSTS = [
  {
    title: 'Getting Started with NextJS',
    slug: 'Getting-Started-with-NextJS',
    image: 'Next.png',
    excerpt: 'getting started ',
    date: '2022-01-24',
  },
  {
    title: 'optimize your Time for SUCCESS',
    slug: 'optimize-your-Time-for-SUCCESS-Time',
    image: 'Time.png',
    excerpt:
      'Good time management enables you to work smarter – not harder – so that you get more done in less time.',
    date: '2022-01-10',
  },
  {
    title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2022',
    slug: 'Complete-JAVASCRIPT-with-HTML5-CSS3-from-zero-to-Expert-2022',
    image: 'Basic.png',
    excerpt:
      'What i learn At the end of this course, You will have a great skills set like HTML5, CSS3, JavaScript, JQuery and Bootstrap Framework.You will learn about media queries and will be able to make website perfect for responsive design.You will be able to build modern looking website which will look great on all the small & wide screens.You will see, the complete web development process from start to finish project.You will learn about web design guidelines which you can apply to real world web projects.You will get complete code for real responsive website',
    date: '2022-01-10',
  },
  {
    title: 'The Complete ReactJs Course - Basics to Advanced (2021)',
    slug: 'The-Complete-ReactJs-Course-Basics-to-Advanced-(2021)',
    image: 'AdvanveReact.png',
    excerpt:
      'What i learn At the end of this course,Introduction to what is React and its basic conceptsLearn what is JSX and how it works behind the scenesLearn what are the stateful and stateless components and when to use themWorking with function based and class based componentsWorking with React Modules, importing and exporting the modulesLearn in detail about how the render method worksReact component lifecycle and different lifecycle methodsCreating dynamic websites with help of re-usable componentsCreating a proper working structure for a project from scratch which will help maintaining the project for long term',
    date: '2021-09-23',
  },
  {
    title: 'The Complete Git',
    slug: 'The-Complete-Git-Course-Basics-to-Advanced-(2021)',
    image: 'GIT.png',
    excerpt:
      'What i learn At the end of this course,Introduction to what is React and its basic conceptsLearn what is JSX and how it works behind the scenesLearn what are the stateful and stateless components and when to use themWorking with function based and class based componentsWorking with React Modules, importing and exporting the modulesLearn in detail about how the render method worksReact component lifecycle and different lifecycle methodsCreating dynamic websites with help of re-usable componentsCreating a proper working structure for a project from scratch which will help maintaining the project for long term',
    date: '2021-09-23',
  },
];
function AllPostsPage() {
  return <AllPosts posts={Dummy_POSTS} />;
}
export default AllPostsPage;
