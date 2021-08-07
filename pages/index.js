import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData , getApiPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const apidata = await getApiPostsData()
  const allPostsData = getSortedPostsData()
  return {
    props: {
      postData: allPostsData,
      apidata:apidata
    }
  }
}

export default function Home({ postData, apidata }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/posts/first-post">Create Blog Post</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h3>{apidata.date}</h3>
        <ul className={utilStyles.list}>
          {postData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>         
          ))}
        </ul>
      </section>
    </Layout>
  )
}
