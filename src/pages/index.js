import Head from 'next/head'
import ShellNav from '../components/ShellNav';
import Homepage from '../components/Homepage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GitNotes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ShellNav></ShellNav>

      <br />

      <Homepage></Homepage>
    </div>
  )
}
