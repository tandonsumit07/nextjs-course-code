

import { Fragment } from "react";
import PostItem from '../../components/posts/posts-item';
import {useRouter }  from 'next/router'  

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
export default function PostDetailPage(){

  const router = useRouter();
  const { slug } = router.query;
  
  const post = DUMMY_POSTS.find((post) => post.slug === slug)
  console.log("post", post)
  return (
    <Fragment>
      <h1>
        Blog Detail !!!
      </h1>
      <PostItem key={post.slug} post = {post} />
    </Fragment>
  );
}