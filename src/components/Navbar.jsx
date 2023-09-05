import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import userLogo from '../assets/usuario.png';

const links = [
  { path: '/', text: 'Home' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.linksCtn}>
      <div className={styles.column}>
        <h1>Bookstore CMS</h1>
      </div>
      <div className={styles.menu}>
        <ul>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <li>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.perfilCtn}>
      <img src={userLogo} alt="userLogo" />
    </div>
  </nav>
);

export default Navbar;
