import * as types from '../actions/ActionTypes';

const initialState = {
    temp : 0
};

const hangang = (state = initialState, action) => {
    if(action.type == types.GET_HANGANG){
        return {
            ...state,
            temp: action.temp
        };
    } else {
        return state;
    }
}

export default　hangang;