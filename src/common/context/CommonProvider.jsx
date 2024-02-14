import React, { useReducer } from 'react'
import { types } from '../types/types'
import { commonReducer } from './commonReducer'
import { CommonContext } from './CommonContext'

const initialState = {
    destinyRoute: "",
    searchTerm: ""
}

export const CommonProvider = ({children}) => {

    const [ commonState, dispatch ] = useReducer(commonReducer, initialState)

    const setRoute = ( route = '' ) => {
        const action = {
            type: types.setRoute,
            payload: route
        }
        dispatch(action);
    }

    const setSearchTerm = ( searchTerm = '' ) => {
        const action = {
            type: types.setSearchTerm,
            payload: searchTerm
        }
        dispatch(action);
    }

    return (

        <CommonContext.Provider value={{
            setRoute,
            setSearchTerm,
            ...commonState
        }}
        >
            {children}
        </CommonContext.Provider>
    )
}
