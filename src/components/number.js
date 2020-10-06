import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

const number = () => {
  const lottoNumber = [10, 20, 30, 40, 50, 60];
  
  return (
    <Layout>
      <div className="number-contents">
        <h2>로또 번호 추첨</h2>
        <nav className="options-nav">
          <h3>추첨 옵션</h3>
          <ul className="options-list">
            <li>
              <button>기본</button>
            </li>
            <li>
              <button>선택배제(미구현)</button>
            </li>
            <li>
              <button>확률(미구현)</button>
            </li>
          </ul>
        </nav>
        <div className="result-box">
          <h2>추첨 결과</h2>
          <ViewNumber number={lottoNumber}/>
        </div>
        <div className="submit-box">
          <button>추첨하기</button>
        </div>
      </div>
    </Layout>
  );
};

export default number;