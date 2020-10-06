import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

import * as actions from '../actions/index';
import models from '../models/models';
import { connect } from 'react-redux';

const number = (props) => {
  const randomNumber = () => {
    props.getNumber(models.getRandom());
  }

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
          <ViewNumber number={props.lottoNumber}/>
        </div>
        <div className="submit-box">
          <button onClick={randomNumber}>추첨하기</button>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    lottoNumber : state.randomNumber.lottoNumber,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getNumber : (arr) => {dispatch(actions.getRandomNumber(arr))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(number);