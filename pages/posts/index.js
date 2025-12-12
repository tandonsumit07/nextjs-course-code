import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [{
  slug: 'getting-started-nextjs',
  title: 'Getting Started with Next JS',
  image: 'getting-started-with-nextjs.png',
  excerpt: 'Somethimng will come here',
  date: '2022-02-10'

},
{
  slug: 'nextjs-file-based-routing',
  title: 'Getting Started with Next JS File based routing',
  image: 'nextjs-file-based-routing.png',
  excerpt: 'Somethimng will come here',
  date: '2022-02-10'

}];
export default function AllPostsPage(){
     return (
    <Fragment>
      <h1>
        Blog List !!!
      </h1>
      <AllPosts posts = {DUMMY_POSTS} />
    </Fragment>
  );
}