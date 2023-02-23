import { useState, useEffect, useCallback } from "react";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from './../../constants/api';
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PropTypes from 'prop-types'; 
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import { debounce } from "lodash";
import UIInput from "../../components/UI/UIInput";
import s from './SearchPage.module.css';

let SearchPage = ({setErrorApi}) => {

    let [inputSearchValue, setInputSearchValue] = useState('');
    let [people, setPeople] = useState([]);

    let getResponse = async param => {
        let res = await getApiResource(API_SEARCH + param);

        if (res) {
            let peopleList = res.results.map( ({name, url}) => {
                let id = getPeopleId(url);
                let img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img
                }
            });
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect( () => {
        getResponse('')
    }, []);

    let debouncedGetResponce = useCallback(debounce(value => getResponse(value), 300), []);

    let handleInputChange = (value) => {
        setInputSearchValue(value);
        debouncedGetResponce(value);
    };

    return(
        <>
            <h1 className='header__text'>Search</h1>
            <UIInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                classes={s.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    );
};

SearchPage.propTypes = {
setErrorApi: PropTypes.func
};

export default withErrorApi(SearchPage);