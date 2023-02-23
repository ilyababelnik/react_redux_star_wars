import React, { useContext, useState } from 'react';
import { changeCssVaribles } from './../services/changeCssVaribles';

export let THEME_LIGHT = 'light';
export let THEME_DARK = 'dark';
export let THEME_NEUTRAL = 'neutral';

let ThemeContext = React.createContext();

let ThemeProvider = ({children, ...props}) => {

    let [theme, setTheme] = useState(null);

    let change = (name) => {
        setTheme(name);
        changeCssVaribles(name);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            change
        }}
        {...props}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export let useTheme = () => useContext(ThemeContext);