import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '../../../components/postUser/postUser'
import { Suspense } from 'react'
import { getPost } from '../../../lib/data'

const getData = async (slug) => {
  const res = await fetch(`${process.env.URL}/api/blog/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }

  return res.json()
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params

  const post = await getPost(slug)

  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params

  const post = await getData(slug)

  const createdDate = new Date(post.createdAt).toLocaleDateString()

  return (
    <div className={`container ${styles.section}`}>
    <div className={`${styles.container}`}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
      <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published: </span>
            <span className={styles.detailValue}>
              {createdDate}
            </span>
            
          </div>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
    </div>
  )
}

export default SinglePostPage