import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Favorite from './../Favorite';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from './../../context/ThemeProvider';
import iconDroid from './img/droid.svg';
import iconLightSaber from './img/lightsaber.svg';
import iconSpaceStation from './img/space-station.svg';
import { useState, useEffect } from 'react';

let Header = () => {
    let [icon, setIcon] = useState(iconSpaceStation)
    let isTheme = useTheme();

    useEffect( () => {
        switch(isTheme.theme) {
            case THEME_LIGHT: setIcon(iconLightSaber); break;
            case THEME_DARK: setIcon(iconSpaceStation); break;
            case THEME_NEUTRAL: setIcon(iconDroid); break;
            default: setIcon(iconSpaceStation);
        }
    }, [isTheme])

    return(
        <div className={s.container}>

            <img className={s.logo} src={icon} alt='icon' />

            <ul className={s.list__container}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/people?page=1'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/not-found'>Not Found</NavLink></li>
                <li><NavLink to='/fail'>Fail</NavLink></li>
            </ul>

            <Favorite />

        </div>
    );
}

export default Header;