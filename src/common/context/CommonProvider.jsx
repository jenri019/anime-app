import React, { useReducer } from 'react'
import { types } from '../types/types'
import { commonReducer } from './commonReducer'
import { CommonContext } from './CommonContext'

const initialState = {
    destinyRoute: ""
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

    return (

        <CommonContext.Provider value={{
            setRoute,
            ...commonState
        }}
        >
            {children}
        </CommonContext.Provider>
    )
}
