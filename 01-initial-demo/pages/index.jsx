import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jose</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href="/about">About!</a>
        </h1>

        <p className={styles.description}>
          Editar{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

    </div>
  )
}
