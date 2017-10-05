import {combineReducers} from "redux";

import { routerReducer as routing } from 'react-router-redux';
import animeReducer from './animeReducer'

export default () => {
    return combineReducers({
        animes: animeReducer,
        routing
    });
};