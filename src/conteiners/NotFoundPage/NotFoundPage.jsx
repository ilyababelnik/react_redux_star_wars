import img from './../../static/not-found.jpg';
import {useLocation} from 'react-router-dom';
import s from './NotFoundPage.module.css';

let NotFoundPage = () => {
    let location = useLocation();
    return(
        <>
            <img className={s.img} src={img} alt='Not Found Page' />
            <p className={s.text}>No match for <u>{location.pathname}</u></p>
        </>
    );
};

export default NotFoundPage;