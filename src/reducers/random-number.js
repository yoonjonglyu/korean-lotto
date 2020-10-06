import * as types from '../actions/ActionTypes';

const initialState = {
    lottoNumber : [10, 20, 30, 40, 50, 60]
};

const randomNumber = (state = initialState, action) => {
    if(action.type === types.GET_RANDOM_LOTTO){
        return {
            ...state,
            lottoNumber: action.lottoNumber
        };
    } else {
        return state;
    }
}

export default　randomNumber;