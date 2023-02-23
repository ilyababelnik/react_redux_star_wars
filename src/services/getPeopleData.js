import {
    SWAPI_PEOPLE, 
    SWAPI_ROOT, 
    GUIDE_IMG_EXTENSION, 
    URL_IMG_PERSON,
    SWAPI_PARAM_PAGE
    } from './../constants/api';

export let getPeoplePageId = url => {
    let pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    let id = url.slice(pos + SWAPI_PARAM_PAGE.length);
    return Number(id);
}

let getId = (url, category) => {
    let id = url
        .replace(SWAPI_ROOT + category, '')
        .replace(/\//g, '');
    return id;
} 

export let getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export let getPeopleImage = id => `${URL_IMG_PERSON+id+GUIDE_IMG_EXTENSION}`;