import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

const lotto = () => {
  const lottoNumber = [2, 4, 6, 8, 10, 12];

  return (
    <Layout>
      <div className="lotto-contents">
        <h2>당첨번호 조회</h2>
        <nav className="options-nav">
          <h3>조회 옵션</h3>
          <ul className="options-list">
            <li>
              <button>회차</button>
            </li>
            <li>
              <button>번호(미구현)</button>
            </li>
            <li>
              <button>당첨자(미구현)</button>
            </li>
          </ul>
        </nav>
        <div className="result-box">
          <h2>조회 결과</h2>
          <ViewNumber number={lottoNumber}/>
        </div>
        <div className="submit-box">
          <button>추첨하기</button>
        </div>
      </div>
    </Layout>
  );
};

export default lotto;