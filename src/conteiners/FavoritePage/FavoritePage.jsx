import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from './../../components/PeoplePage/PeopleList';
import s from './FavoritePage.module.css';

let FavoritePage = () => {

    let [people, setPeople] = useState([]);
    let storeData = useSelector(state => state.favoriteReducer);
    useEffect( () => {
        let arr = Object.entries(storeData);
        
        if (arr.length) {
            let res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                };
            });
            setPeople(res);
        };
    }, [])
    
    return(
        <div>
            <h1 className='header__text'>FavoritePage</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h2 className={s.comment}>No data</h2>}
        </div>
    );
};

export default FavoritePage;