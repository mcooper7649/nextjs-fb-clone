import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}
