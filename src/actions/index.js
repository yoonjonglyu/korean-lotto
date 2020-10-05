import * as types from './ActionTypes';

export const getHangang = (temp) => {
    return {
        type : types.GET_HANGANG,
        temp
    };
}

export const getLottoDrw = (drwNumber) => {
    return {
        type : types.GET_LOTTO_DRW,
        drwNumber
    };
}