import axios from 'axios';
import config from '../../config';

const hangangUrl = `${config.apiHost}hangang.php`;
const lottoUrl = `${config.apiHost}lotto.php?drw=`;

const models = (() => {  
    try{
        axios.get(hangangUrl)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.error(err);
        })
        axios.get(`${lottoUrl}915`)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.error(err);
        })
    } catch(e) {
        console.error(e);
    }
})();

export default models;