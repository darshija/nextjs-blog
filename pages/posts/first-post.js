import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getApiPostsData} from '../../lib/posts'

export async function getServerSideProps(context) {
    const apidata = await getApiPostsData()
    return {
      props: {
        apiData : apidata
      }
    }
  }
  
export default function FirstPost({apiData}) {
  return (
      <Layout>
    <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>{apiData.date}</h2>
      </Layout>
  )
}
