import {omit} from 'lodash';
import {ADD_PERSON_TO_FAVORITE,
        REMOVE_PERSON_FROM_FAVORITE} from './../constans/actionTypes'; 
import {getLocalStorage} from './../../utils/localStorage';

let initialState = getLocalStorage('store');

let favoriteReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state, 
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE:
            return omit(state, [action.payload])
        default: 
            return state;
    }
}

export default favoriteReducer;