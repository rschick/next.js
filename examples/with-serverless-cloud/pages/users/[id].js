import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fetch from 'unfetch'
import useSWR from 'swr'

import { useRouter } from 'next/router'

import styles from '../../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Users() {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSWR(`/api/users/${id}`, fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>User {id}</h1>

        <p className={styles.description}>Name: {data?.value.name}</p>
        <p className={styles.description}>Status: {data?.value.status}</p>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>Home &rarr;</h2>
              <p>Return to the home page</p>
            </a>
          </Link>

          <Link href="/users">
            <a className={styles.card}>
              <h2>Users &rarr;</h2>
              <p>Return to the users page</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}