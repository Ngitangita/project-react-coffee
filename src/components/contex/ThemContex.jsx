import { createContext, useContext, useState } from "react";

const CreateTheme = createContext({
    openSearch: false,
    onOpenSearch : () => {},
    openBar: false,
    onOpenBar : () => {}
})

export const useOpen = () =>{
    return useContext(CreateTheme)
}

export const ThemeContext = ({children}) =>{
    const [isVisible, setIsVisible] = useState(false)
    const [visible, setVisible] = useState(false)
    const onOpenSearch = () =>{
        setIsVisible(!isVisible)
    }

    const onOpenBar = () =>{
        setVisible(!visible)
    }

    return(
        <CreateTheme.Provider value={{
            openSearch: isVisible, 
            onOpenSearch,
            openBar: visible, 
            onOpenBar
            }}>
            {children}
        </CreateTheme.Provider>
    )
}

