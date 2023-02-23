import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';
import s from './PeopleNavigation.module.css';
import UIbutton from './../../UI/UIbutton';

let PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}) => {
    let handleChangeNext = () => getResource(nextPage);
    let handleChangePrev = () => getResource(prevPage);
    return(
        <div className={s.container}>
            <Link to={`/people/?page=${counterPage - 1}`} className={s.buttons}>
                <UIbutton 
                    text='Prev'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={s.buttons}>
                <UIbutton 
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
};

PeopleNavigation.propTypes = {
getResource: PropTypes.func,
prevPage: PropTypes.string,
nextPage: PropTypes.string,
counterPage: PropTypes.number
};

export default PeopleNavigation;