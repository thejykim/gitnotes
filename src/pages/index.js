import Head from 'next/head'
import PublicGuard from '../services/PublicGuard';
import Homepage from '../components/pages/Homepage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextLogin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PublicGuard>
        <Homepage></Homepage>
      </PublicGuard>
    </div>
  );
}
