import { useContext, createContext } from "react";

// create context and set default (inital) values
export const themeContext = createContext({
    themeMode: 'light',
    lightTheme: () => {},
    darkTheme: () => {},
});

// export the provider
export const ThemeProvider = themeContext.Provider

// create custom hooks
export default function useTheme() {
    return useContext(themeContext)
}