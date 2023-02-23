import PropTypes from 'prop-types'; 
import s from './UIInput.module.css';
import cn from 'classnames';
import icon from './img/cancel.svg';

let UIInput = ({value, handleInputChange, classes}) => {
    return(
        <div className={cn(s.wrapper__input, classes)}>
            <input 
                type='text' 
                value={value} 
                onChange={(e) => handleInputChange(e.target.value)}
                className={s.input}
            />
            <img 
                src={icon}
                className={cn(s.clear, !value && s.clear__disabled)}
                alt='Clear'
                onClick={() => value && handleInputChange('')}
            />
        </div>
    );
};

UIInput.propTypes = {
value: PropTypes.string,
handleInputChange: PropTypes.func,
classes: PropTypes.string
};

export default UIInput;