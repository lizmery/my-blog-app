import Image from "next/image"
import Link from "next/link"
import styles from "./postCard.module.css"

const PostCard = ({ post }) => {
    const createdDate = new Date(post.createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img &&
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt='' fill className={styles.img} />
                </div>
            }  
        </div>
        <div className={styles.bottom}>
            <span className={styles.date}>{createdDate}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard