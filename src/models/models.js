import axios from 'axios';
import * as actions from '../actions/index'; 
import config from '../../config';

const hangangUrl = `${config.apiHost}hangang.php`;
const lottoUrl = `${config.apiHost}lotto.php?drw=`;

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

const models = {
    "hangang" : hangang,
    "drwLotto" : drwLotto
};

export default models;