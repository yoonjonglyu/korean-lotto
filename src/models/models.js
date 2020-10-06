import axios from 'axios';
import * as actions from '../actions/index'; 
import config from '../../config';

const mode = "dev";
const cors = "https://cors-anywhere.herokuapp.com/";

const hangangUrl = mode === "dev" ? `${config.apiHost}hangang.php` : `${cors}http://hangang.dkserver.wo.tc/`;
const lottoUrl = mode === "dev" ? `${config.apiHost}lotto.php?drw=` : `${cors}https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=`;

const hangang = (dispatch) => {  
    try{
        return axios.get(hangangUrl).then((res) => {
            dispatch(actions.getHangang(res.data.temp))
        })
    } catch(e) {
        console.error(e);
    }
};

const drwLotto = (dispatch, drw) => {  
    try{
        return axios.get(`${lottoUrl}${drw}`).then((res) => {
            const state = res.data
            const drws = [state.drwtNo1, state.drwtNo2, state.drwtNo3, state.drwtNo4, state.drwtNo5, state.drwtNo6, state.bnusNo];
            dispatch(actions.getLottoDrw(drws))
        })
    } catch(e) {
        console.error(e);
    }
};

const getRound = (dispatch) => {
    const startRound = 931; 
    const startDate = new Date('2020-10-03');
    const endDate = new Date();
    const dateDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    
    const round = startRound + Math.floor(dateDiff / 7);

    dispatch(actions.getNowRound(round));
}

const models = {
    "hangang" : hangang,
    "drwLotto" : drwLotto,
    "getRound" : getRound
};

export default models;