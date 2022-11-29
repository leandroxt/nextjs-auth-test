import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Testing firebase auth</title>
        <meta name="description" content="Authentication by firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        Home - public
        <br/>
        <Link href="/login">Login</Link>
        <br/>
        <Link href="/register">Create account</Link>
      </main>
    </div>
  )
}
