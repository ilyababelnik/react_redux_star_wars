import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react';
import {makeConcurrentRequest} from './../../../utils/network';
import s from './PersonFilms.module.css';

let PersonFilms = ({personFilms}) => {
    let [filmsName, setFilmsName] = useState([]);

    useEffect( () => {
        (async () => {
            let response = await makeConcurrentRequest(personFilms);
            setFilmsName(response);
        })()
    },[]);


    return(
        <div className={s.wrapper}>
            <ul className={s.list__container}>
                {filmsName
                    ?.sort( (a, b) => a.episode_id - b.episode_id)
                    ?.map( ({title, episode_id}) => (
                        <li className={s.list__item} key={episode_id}>
                            <span className={s.episode}>Episode {episode_id}</span>
                            <span className={s.colon}> : </span>
                            <span className={s.title}>{title}</span>
                        </li>
                ))}
            </ul>
        </div>
    );
};

PersonFilms.propTypes = {
personFilms: PropTypes.array
};

export default PersonFilms;