import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          Kenlo
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/">
          Home
        </Link>
        <Link href="/catalogOnMain">
          Catálogo
        </Link>
      </div>
    </nav>
  );
};

export default Nav;