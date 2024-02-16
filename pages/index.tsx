import Layout from '../components/layout'
import Head from "next/head"
import { NextPage } from 'next'
 
const Page: NextPage = () => {
    return (
        <Layout home>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Home Page about @nielsantosa's Blog" />
            </Head>
            <div className="text-3xl">Whereas</div>
        </Layout>
    )
}
 
 
export default Page