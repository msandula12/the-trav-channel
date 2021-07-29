import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>The Trav Channel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <div>
          <div className={styles.the}>the</div>
          <div className={styles.trav}>trav</div>
          <div className={styles.channel}>channel</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
