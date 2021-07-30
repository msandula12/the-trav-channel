import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const MenuIcon = (
    <svg viewBox="0 0 100 80" width="30" height="30">
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );

  return (
    <nav>
      {/* Desktop */}
      <ul className={styles.navList}>
        {menu.map((page) => (
          <li key={page.title} className={styles.navListItem}>
            <Link href={page.path}>
              <a
                className={`${styles.navLink} ${
                  router.pathname === page.path ? styles.active : ''
                }`}
              >
                {page.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {/* Tablet and smaller */}
      <div className={styles.navMenuMobile}>
        <div className={styles.navMenuIcon} onClick={toggleMenu}>
          {MenuIcon}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
