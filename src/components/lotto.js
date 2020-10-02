import React from 'react';
import Layout from './Layout';

const lotto = () => {
  return (
    <Layout>
      <div className="lotto-contents">
        <h2>로또번호통계</h2>
        <nav className="options-nav">
          <ul className="option-list">
            <li>
              <button>옵션1</button>
            </li>
            <li>
              <button>옵션2</button>
            </li>
            <li>
              <button>옵션3...</button>
            </li>
          </ul>
        </nav>
        <div className="result-box">
          <p>결과</p>
        </div>
      </div>
    </Layout>
  );
};

export default lotto;