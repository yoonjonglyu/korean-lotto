import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

const lottoNumber = [
  2,
  4,
  6,
  8,
  10,
  12
];

const number = () => {
  return (
    <Layout>
      <div className="number-contents">
        <nav className="options-nav">
          <ul className="options-list">
            <li>
              <button>옵션1</button>
            </li>
            <li>
              <button>옵션2</button>
            </li>
            <li>
              <button>옵션3</button>
            </li>
          </ul>
        </nav>
        <div className="result-box">
          <p>결과</p>
          <ViewNumber number={lottoNumber}/>
        </div>
      </div>
    </Layout>
  );
};

export default number;