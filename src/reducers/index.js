import { combineReducers } from 'redux';
import hangang from './hangang';
import lottoDrw from './lotto-drw';
import nowRound from './now-round';
import randomNumber from './random-number';

const reducers = combineReducers({
    hangang, lottoDrw, nowRound, randomNumber
});

export default reducers;