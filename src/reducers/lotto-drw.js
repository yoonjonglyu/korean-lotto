import * as types from '../actions/ActionTypes';

const initialState = {
    drwNumber : []
};

const lottoDrw = (state = initialState, action) => {
    if(action.type == types.GET_LOTTO_DRW){
        return {
            ...state,
            drwNumber: action.drwNumber
        };
    } else {
        return state;
    }
}

export default　lottoDrw;