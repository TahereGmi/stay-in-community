import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import posts from '../../public/posts.json'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Blog = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Blog Page
            </h1>
            {Object.entries(posts).map((post) => {
                return <Link
                            key={post[0]}
                            href={{
                                pathname: '/blog/[id]',
                                query: { id: post[0] },
                            }}
                            className={styles.linkTitle}>
                            Post ID: {post[1].title}
                        </Link>
            })}
        </main>      
        </div>
    )
}

export default Blog
