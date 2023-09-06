import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import style from '../styles/Layout.module.css';

const Layout = () => (
  <div className={`${style.fullBg} ${style.white}`}>
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
