import {applyMiddleware, createStore} from 'redux'
import {reducer} from "../reducers";
import thunk from 'redux-thunk';        // штука для асинхронной работы экшенов (используется когда например сервак есть)


/* стор - обьект, в котором храниться состояние приложения */
export const store = createStore(reducer, applyMiddleware(thunk))
