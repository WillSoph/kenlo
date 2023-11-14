import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          Kenlo
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/">
          Home
        </Link>
        <Link href="/loja">
          Loja
        </Link>
      </div>
    </footer>
  );
};

export default Footer;