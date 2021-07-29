import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>The Trav Channel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <div>
          <div className={styles.logoTextPlain}>the</div>
          <div className={styles.logoTextGif}>trav</div>
          <div className={styles.logoTextPlain}>channel</div>
        </div>
      </main>
    </>
  );
};

export default Home;
