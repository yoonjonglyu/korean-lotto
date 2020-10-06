import { combineReducers } from 'redux';
import hangang from './hangang';
import lottoDrw from './lotto-drw';
import nowRound from './now-round';

const reducers = combineReducers({
    hangang, lottoDrw, nowRound
});

export default reducers;