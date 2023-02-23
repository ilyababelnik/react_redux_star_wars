import React, {useEffect, useState} from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, 
         getPeopleImage, 
         getPeoplePageId } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { withErrorApi } from './../../hoc-helpers/withErrorApi';
import PropTypes from 'prop-types'; 
import {useQueryParams} from './../../hooks/useQueryParams';
import PeopleNavigation from './../../components/PeoplePage/PeopleNavigation';

let PeoplePage = ({setErrorApi}) => {

    let [people, setPeople] = useState(null);
    let [prevPage, setPrevPage] = useState(null);
    let [nextPage, setNextPage] = useState(null);
    let [counterPage, setCounterPage] = useState(1);

    let query = useQueryParams();
    let queryPage = query.get('page');

    let getResource = async (url) => {
        let res = await getApiResource(url);
        if (res) {
            let peopleList = res.results.map( ({name, url}) => {
                let id = getPeopleId(url);
                let img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img
                };
            });

            setPeople(peopleList);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);

        } else {
            setErrorApi(true);
        };
    };

    useEffect( () => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    return(
        <>
            <PeopleNavigation 
                getResource = {getResource}
                prevPage = {prevPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
            />
            {(people && <PeopleList people={people} />)}
        </>
    );
};

PeoplePage.propTypes = {
setErrorApi: PropTypes.func
};

export default withErrorApi(PeoplePage);