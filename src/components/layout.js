import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css/layout.css';

const Layout = ({ children }) => {
  return (
    <div id="wrap">
        <Link to="/">
            <header className={'asd'}>
                <h1>로또 추첨기</h1>
            </header>
        </Link>
      <main role="main">
          {children}
      </main>
      <footer>
          <copyright>ISA all right reserved.</copyright>
      </footer>
    </div>
  );
};

export default Layout;