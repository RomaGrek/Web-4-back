import {generalReducer} from "./general";
import { combineReducers } from 'redux'

export const reducer = combineReducers(
    {
        general: generalReducer
    }
)