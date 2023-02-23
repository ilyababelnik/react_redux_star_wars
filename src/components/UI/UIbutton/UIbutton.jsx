import PropTypes from 'prop-types'; 
import s from './UIbutton.module.css';
import './../index.css';
import cn from 'classnames';

let UIbutton = ({text, onClick, disabled, theme='dark', classes}) => {
    return(
       <button 
            onClick={onClick} 
            className={cn(s.button, s[theme], classes)}
            disabled={disabled}
            >
                {text}
        </button>
    );
};

UIbutton.propTypes = {
text: PropTypes.string,
onClick: PropTypes.func,
disabled: PropTypes.bool,
theme: PropTypes.string,
classes: PropTypes.string
};

export default UIbutton;