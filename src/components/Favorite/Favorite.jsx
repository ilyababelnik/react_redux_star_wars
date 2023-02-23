import icon from './img/bookmark.svg';
import s from './Favorite.module.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

let Favorite = () => {
    let [count, setCount] = useState(null);
    let storeData = useSelector(state => state.favoriteReducer);

    useEffect( () => {
        let length = Object.keys(storeData).length;
        setCount(length);
    })

    return(
        <div className={s.container}>
            <Link to='/favorite'>
                <span className={s.counter}>{count}</span>
                <img src={icon} className={s.icon} alt='Favorites' />
            </Link>
        </div>
    );
};

export default Favorite;