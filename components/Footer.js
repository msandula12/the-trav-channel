import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      Copyright &copy;{year} Mike Sandula.
    </footer>
  );
};

export default Footer;
