import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const nav = [
  {
    id: 1,
    name: 'HOME',
    path: '/',
  },
  {
    id: 2,
    name: 'WEB',
    path: '/sub#web',
  },
  {
    id: 3,
    name: 'EDITORIAL',
    path: '/sub#editorial',
  },
  {
    id: 4,
    name: 'ABOUT',
    path: '/sub#about',
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const handleMenuToggle = () => setToggle(!toggle);

  return (
    <header className={`${styles.header}  ${toggle ? styles.open : ''}`}>
      <h1>
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </h1>

      <nav className={`${styles.nav} ${toggle ? styles.open : ''}`}>
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <Link to={item.path} onClick={() => setToggle(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className={`${styles.menuBtn} ${toggle ? styles.open : ''}`}
        onClick={handleMenuToggle}
      >
        {toggle ? <X stroke="#fff" size={28} /> : <Menu stroke="#fff" size={28} />}
      </button>
    </header>
  );
};

export default Header;
