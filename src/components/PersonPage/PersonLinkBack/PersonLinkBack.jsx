import { useNavigate } from 'react-router-dom';
import s from './PersonLinkBack.module.css';

let PersonLinkBack = () => {

    let navigate = useNavigate();

    let handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    return(
        <>
            <a className={s.link} href='#' onClick={handleGoBack}>Go Back</a>
        </>
    );
};

export default PersonLinkBack;