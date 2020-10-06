import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';
import images from '../images/hangang.jpg';

import * as actions from '../actions/index';
import models from '../models/models';
import { connect } from 'react-redux';


const Home = (props) => {
  const lottoNumber = props.lotto.length > 0 ?  props.lotto : [1, 2, 3, 4, 5, 6];

  return (
    <Layout>
      <div className="home-contents">
         <h2>로또 추첨기</h2>
         <div className="hangang-box">
           <img src={images} />
           <h2>한강 수온</h2>
           <p>
           謀事在人,成事在天(모사재인 성사재천)<br />
           "일을 꾸미는 것은 사람이되 일을 이루게 하는 것은 하늘이어서 강제로 할 수가 없다."<br />
           -제갈량-
           </p>
           <h3>{props.hangang} °C</h3>
         </div>
         <div className="lotto-box">
           <h2>지난 {props.nowRound} 회차 당첨번호</h2>
           <ViewNumber number={lottoNumber}/>
         </div>
      </div>
    </Layout>
  );
};

// @#!%$#%#$^@$!@$@!#@!#@!#!
let nowRound = 931;

const mapStateToProps = (state) => {
  nowRound = state.nowRound.nowRound;

  return {
    hangang : state.hangang.temp,
    lotto : state.lottoDrw.drwNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      hangangTemp : models.hangang(dispatch),
      lottoDrw : models.drwLotto(dispatch, nowRound),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);