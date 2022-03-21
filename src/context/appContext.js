import React, { useReducer, useContext } from "react";

import reducer from "./reducers";

import { DISPLAY_ALERT, CLEAR_ALERT } from "./action";

const initialState = {
    isLoading: false, 
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //Dispatching Display Alert Action
    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }

    //Dispatching Clear Alert Action
    const clearAlert = () => {
        setTimeout(() => {
            dispatch( {type: CLEAR_ALERT})
        }, 3000)
    }

    return (
        <AppContext.Provider value={{ ...state, displayAlert }}>
            {children}
        </AppContext.Provider>
    )
}

//Setting up a custom hook for easy access of AppContext
const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}