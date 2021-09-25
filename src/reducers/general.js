import {
    SET_X,
    SET_Y,
    SET_R,
    ADD_SHOT
} from "../actions/generalActions";

/* описание начального состояния */
const initialState = {
    x: null,
    y: null,
    r: 5,
    table: []
}

/* функция редусер (принимает пред состояние и экшн и возвращает новое состояние)*/
export function generalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_X:
            return {...state, x: action.payload};
        case SET_Y:
            return {...state, y: action.payload};
        case SET_R:
            return {...state, r: action.payload};
        case ADD_SHOT:
            return {...state, table: [...state, action.payload]};
    }
    return state;
}

