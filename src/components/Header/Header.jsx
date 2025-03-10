import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const nav = [
  {
    id: 1,
    name: 'HOME',
    path: '/',
  },
  {
    id: 2,
    name: 'WEB',
    path: '/web',
  },
  {
    id: 3,
    name: 'EDITORIAL',
    path: '/editorial',
  },
  {
    id: 4,
    name: 'OTHER',
    path: '/other',
  },
];
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </h1>

      <nav>
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
