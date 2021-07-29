import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <main className="centered">
      <div className={`${styles.logo} zoom-in`}>
        <div className={styles.logoTextPlain}>the</div>
        <div className={styles.logoTextGif}>trav</div>
        <div className={styles.logoTextPlain}>channel</div>
      </div>
    </main>
  );
};

export default Home;
