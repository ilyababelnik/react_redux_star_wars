import {ADD_PERSON_TO_FAVORITE,
        REMOVE_PERSON_FROM_FAVORITE} from './../constans/actionTypes'; 

export let setPersonToFavorite = person => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
});

export let removePersonFromFavorite = personId => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
});