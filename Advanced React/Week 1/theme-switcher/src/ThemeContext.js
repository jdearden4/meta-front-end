import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    //initalize theme to light
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider
            value={{
                //light or dark string value
                theme,
                //toggles the theme
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

//useContext hook
//pass in the themecontext object as an argument
//this allows components to get theme and toggle theme values
export const useTheme = () => useContext(ThemeContext);