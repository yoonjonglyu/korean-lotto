import React from 'react';
import { Link } from 'react-router-dom';
import tailwind from '../css/main.css';

const Layout = ({ children }) => {
  return (
    <div id="wrap" className={tailwind['wrap']}>
      <header className={tailwind['header']}>
        <ul className={tailwind['header-nav']}>
          <li>
            <Link to="/">
              <h1>lotto main</h1>
            </Link>
          </li>
          <li>
            <Link to="/lotto">
              <span>지난 당첨번호 보기</span>
            </Link>
          </li>
          <li>
            <Link to="/number">
              <span>로또 번호 추첨</span>
            </Link>
          </li>
        </ul>
      </header>
      <main role="main" className={tailwind['main']}>
          {children}
      </main>
      <footer className={tailwind['footer']}>
          <p>ISA all right reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;