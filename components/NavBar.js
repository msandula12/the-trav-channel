import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavBar.module.css';

const CloseIcon = (
  <svg viewBox="0 0 100 100" width="30" height="30">
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
  </svg>
);

const MenuIcon = (
  <svg viewBox="0 0 100 100" width="30" height="30">
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
  </svg>
);

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

  const closeMenu = () => {
    if (!isMenuOpen) {
      return;
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const NavItems = menu.map((page) => (
    <li key={page.title} className={styles.navListItem} onClick={closeMenu}>
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
  ));

  return (
    <>
      {/* Desktop */}
      <nav className={styles.navDesktop}>
        <ul className={styles.navList}>{NavItems}</ul>
      </nav>
      {/* Tablet/Mobile */}
      <div className={styles.navMobile}>
        <Link href="/" passHref>
          <h2 className="cursor">the trav channel</h2>
        </Link>
        <div className={styles.navMenuIcon} onClick={toggleMenu}>
          {MenuIcon}
        </div>
        <div className={isMenuOpen ? styles.navMenuScreen : 'display-none'}>
          <div className={styles.navCloseIcon} onClick={toggleMenu}>
            {CloseIcon}
          </div>
          <ul className={styles.navList}>{NavItems}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
