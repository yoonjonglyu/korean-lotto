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

export const getNowRound = (nowRound) => {
    return {
        type : types.GET_NOW_ROUND,
        nowRound
    };
}

export const getRandomNumber = (lottoNumber) => {
    return {
        type : types.GET_RANDOM_LOTTO,
        lottoNumber
    };
}