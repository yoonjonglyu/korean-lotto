import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

import models from '../models/models';
import { connect } from 'react-redux';


const Home = (props) => {
  const lottoNumber = props.lotto[0] !== undefined?  props.lotto : [1, 2, 3, 4, 5, 6];

  return (
    <Layout>
      <div className="home-contents">
         <h1>로또</h1>
         <div>
           한강 수온 표
           {props.hangang}
         </div>
         <div>
           지난 회차 당첨번호
           <ViewNumber number={lottoNumber}/>
         </div>
      </div>
    </Layout>
  );
};

const mapStateProps = (state) => {
  return {
    hangang : state.hangang.temp,
    lotto : state.lottoDrw.drwNumber
  }
}

const mapDispatchProps = (dispatch) => {
  return {
      hangangTemp : models.hangang(dispatch),
      lottoDrw : models.drwLotto(dispatch, '931')
  }
}

export default connect(mapStateProps, mapDispatchProps)(Home);