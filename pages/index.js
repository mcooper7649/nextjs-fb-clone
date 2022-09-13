import Head from 'next/head';
import Header from '../components/Header';
import { getSession } from 'next-auth/react';
import Login from '../components/Login';

export default function Home({ session, ...pageProps }) {
  console.log(pageProps, session);
  if (!session) return <Login />;

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

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);
  //Get the user
  return {
    props: {
      session,
    },
  };
}
