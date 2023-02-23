import loader from './img/Spinner.svg';
import loaderBlue from './img/Spinner-blue.svg';
import loaderBlack from './img/Spinner-black.svg';
import s from './UILoading.module.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import cn from 'classnames';

let UILoading = ({theme = 'white', isShadow = true, classes}) => {

    let [loaderIcon, setLoaderIcon] = useState(null);

    useEffect( () => {
        switch(theme) {
            case 'white': setLoaderIcon(loader); break;
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'blue': setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loader);
        }
    }, []);

    return(
        <img className={cn(s.loader, isShadow && s.shadow, classes)} src={loaderIcon} alt='Loader' /> 
    );
};

UILoading.propTypes = {
theme: PropTypes.string,
isShadow: PropTypes.bool,
classes: PropTypes.string
};

export default UILoading;