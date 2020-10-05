import { combineReducers } from 'redux';
import hangang from './hangang';
import lottoDrw from './lotto-drw';

const reducers = combineReducers({
    hangang, lottoDrw
});

export default reducers;