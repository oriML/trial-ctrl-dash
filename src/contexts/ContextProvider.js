import React, { createContext, useContext , useState} from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart:false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu ] = useState(true);
    const [ isClicked, setIsClicked ] = useState(initialState)
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }
    const [ screenSize, setScreenSize ] = useState(undefined);
    const [ currentColor, setCurrentColor ] = useState('#03C9D7');
    const [ currentMode, setCurrentMode ] = useState('Light');
    const [ themeSettings, setThemeSettings ] = useState(false);

    const setMode = e => {
        const mode = e.target.value;
        setCurrentMode(mode);
        localStorage.setItem('themeMode', mode);
        setThemeSettings(false)
    }
    
    const setColor = color => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false)
    }

    return (
        <StateContext.Provider
        value={{
            handleClick,
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            screenSize, setScreenSize,
            currentColor,
            currentMode,
            themeSettings, setThemeSettings,
            setColor,
            setMode
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);