import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

const lottoNumber = [
  {id: 0, number : 2},
  {id: 1, number : 4},
  {id: 1, number : 6},
  {id: 1, number : 8},
  {id: 1, number : 10},
  {id: 1, number : 12}
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