import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.logo}>
        <div className={styles.logoTextPlain}>the</div>
        <div className={styles.logoTextGif}>trav</div>
        <div className={styles.logoTextPlain}>channel</div>
      </div>
    </main>
  );
};

export default Home;
