import React, { useState } from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

import * as actions from '../actions/index';
import models from '../models/models';
import { connect } from 'react-redux';

const lotto = (props) => {
  const lottoNumber = props.lotto.length > 0 ? props.lotto : [2, 4, 6, 8, 10, 12];
  const [drw, setDrw] = useState('');

  const searchDrw = () => {
    props.lottoDrw(drw);
  }
  const handleDrw = (e) => {
    setDrw(e.target.value)
  }

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
          <input type="number" placeholder="조건을 입력해주세요." value={drw} onChange={handleDrw} /><br />
          <button onClick={searchDrw}>조회하기</button>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    lotto : state.lottoDrw.drwNumber,
  }
}

const mapDispatchToProps = (dispatch) => {
  const dis = dispatch;

  return {
    lottoDrw : (drw) => {models.drwLotto(dis, drw)},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(lotto);