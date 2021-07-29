import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavBar.module.css';

const menu = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Videos',
    path: '/videos',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className={styles.navList}>
        {menu.map((page) => (
          <li
            key={page.title}
            className={`${styles.navLink} ${
              router.pathname === page.path ? styles.active : ''
            }`}
          >
            <Link href={page.path}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
