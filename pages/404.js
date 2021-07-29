import Head from 'next/head';

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>Not Found - The Trav Channel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Sorry, the page you were looking for could not be found!</main>
    </div>
  );
};

export default NotFound;
