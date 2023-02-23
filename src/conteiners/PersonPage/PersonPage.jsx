import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import {getApiResource}from './../../utils/network';
import React, {useEffect, useState, Suspense} from 'react';
import {API_PERSON} from './../../constants/api';
import { withErrorApi } from './../../hoc-helpers/withErrorApi';
import PersonPhoto from './../../components/PersonPage/PersonPhoto';
import PersonInfo from './../../components/PersonPage/PersonInfo';
import {getPeopleImage} from './../../services/getPeopleData';
import UILoading from './../../components/UI/UILoading';
import s from './PersonPage.module.css';
import PersonLinkBack from './../../components/PersonPage/PersonLinkBack';
import { useSelector } from 'react-redux';


let PersonFilms = React.lazy( () => import('./../../components/PersonPage/PersonFilms'));

let PersonPage = ({setErrorApi}) => {

    let userId = useParams().id;
    let [personId, setPersonId] = useState(null);
    let [personName, setPersonName] = useState('');
    let [personInfo, setPersonInfo] = useState([]);
    let [personPhoto, setPersonPhoto] = useState('');
    let [personFilms, setPersonFilms] = useState([]);
    let [personFavorite, setPersonFavorite] = useState(false);
    
    let storeData = useSelector(state => state.favoriteReducer);

    useEffect( () => {

        (async () => {
            let res = await getApiResource(`${API_PERSON}/${userId}/`);

            storeData[userId] ? setPersonFavorite(true) : setPersonFavorite(false);

            setPersonId(userId);

        if (res) {
            setPersonInfo([
                {title: 'Height' , data: res.height},
                {title: 'Mass' , data: res.mass},
                {title: 'Hair color' , data: res.hair_color},
                {title: 'Skin color' , data: res.skin_color},
                {title: 'Eye color' , data: res.eye_color},
                {title: 'Birth year' , data: res.birth_year},
                {title: 'Gender' , data: res.gender}
            ]);
            setPersonName(res.name);
            setPersonPhoto (getPeopleImage(userId));
            res.films.length && setPersonFilms(res.films);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

        })();

    }, []);

    return(
        <>
        <PersonLinkBack />
        <div className={s.wrapper}>
            <span className={s.person__name}>{personName}</span>
            <div className={s.container}><PersonPhoto personPhoto={personPhoto} personName={personName} personId={personId} personFavorite={personFavorite} setPersonFavorite={setPersonFavorite} />
            {personInfo && <PersonInfo personInfo={personInfo} />}          {personFilms && (
                <Suspense fallback={<UILoading />}>
                    <PersonFilms personFilms={personFilms} />
                </Suspense>
            )}
            </div>
        </div>
        </>
    );
};

PersonPage.propTypes = {
setErrorApi: PropTypes.func
};

export default withErrorApi(PersonPage);