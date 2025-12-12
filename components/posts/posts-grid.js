import Classes from './posts-grid'
import PostItem from "./posts-item";
export default function PostsGrid(props){

    const {posts} = props ;
    return <ul className= {Classes.grid}>
        {posts.map((post) => <PostItem key={post.slug} post = {post} /> )}
    </ul>
}