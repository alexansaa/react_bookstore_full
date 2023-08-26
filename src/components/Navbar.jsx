import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'categories', text: 'Categories' },
  { path: 'books', text: 'Books' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.column}>
      <h1>BookStore</h1>
    </div>
    <div className={styles.menu}>
      <ul>
        {links.map((link, index) => (
          <React.Fragment key={link.text}>
            <li>
              {index > 0 && ' | '}
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
