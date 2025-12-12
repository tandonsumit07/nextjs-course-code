import Classes from './post-item.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function PostItem(props){
    const {title, image, excerpt, date, slug} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    const imagePath = `/images/posts/${slug}.png`

    return  <li>
        <Link href={`/posts/${slug}`}>
        <div className= {Classes.post}>
        <Image  src={imagePath} alt= {title}  height={200} width={200}/>
        </div>
        <div className= {Classes.content}>
        <h3>{title}</h3>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
        </div>
        </Link>
    </li>
}