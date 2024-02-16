import type { ReactElement, ReactNode } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }: { children: ReactNode, home?: boolean }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
            </Head>
            <Navbar />
            <main className="flex min-h-screen p-24 flex-col items-center justify-center">
            {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
                </div>
            )}
            <Footer />
        </div>
    )
}


export default Layout;