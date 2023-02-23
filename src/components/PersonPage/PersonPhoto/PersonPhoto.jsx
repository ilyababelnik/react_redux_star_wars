import PropTypes from 'prop-types'; 
import s from './PersonPhoto.module.css';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from './../../../store/actions';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

const PersonPhoto = ({personId, personPhoto, personName, personFavorite, setPersonFavorite}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                },
            }));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={s.container}>
                <img className={s.photo} src={personPhoto} alt={personName} />
                <img
                    src={personFavorite ? iconFavoriteFill : iconFavorite}
                    onClick={dispatchFavoritePeople}
                    className={s.favorite}
                    alt="Add to favorite"
                />
            </div>
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;