import axios from 'axios';      // штука для отправки запроса на сервер

/* экшены */
export const SET_X = "SET_X";           // введен X
export const SET_Y = "SET_Y";           // введен y
export const SET_R = "SET_R";           // введен r
export const ADD_SHOT = "ADD_SHOT";     // добавить информацию о точке в расстояние



/* функции генераторы экшенов (создают экшены) */

export function sendPoint(info){
    return dispatch => {
        // let header = localStorage.getItem("loginIn");
        axios({
            url: 'http://localhost:8080/shot',
            data: info,
            method: 'post',
            // headers: {
            //     Authorization: header,
            // },
        })
            .then(data => {
                console.log(data);
                dispatch({
                    type: ADD_SHOT,
                    payload: data.data,
                })
            })
            .catch(data => console.log(data));
        dispatch({
            type: SET_X,
            payload: null,
        });
        dispatch({
            type: SET_Y,
            payload: null,
        });
        document.getElementById("Y").value = "";
    }
}

export function setX(X) {
    return {
        type: SET_X,
        payload: X
    }
}

export function setY(Y) {
    return {
        type: SET_Y,
        payload: Y
    }
}

export function setR(R) {
    return {
        type: SET_R,
        payload: R
    }
}


