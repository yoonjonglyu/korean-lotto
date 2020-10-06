import * as types from '../actions/ActionTypes';

const initialState = {
    nowRound : 931
};

const nowRound = (state = initialState, action) => {
    if(action.type == types.GET_NOW_ROUND){
        return {
            ...state,
            nowRound: action.nowRound
        };
    } else {
        return state;
    }
}

export default　nowRound;