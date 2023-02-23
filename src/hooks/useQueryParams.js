import {useLocation} from 'react-router-dom';

export let useQueryParams = () => {
    return new URLSearchParams(useLocation().search);

}