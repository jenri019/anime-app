import React, { useReducer } from 'react'
import { GenresContext } from './GenresContext'
import { types } from '../types/types'
import { genresReducer } from './genresReducer'

const initialState = {
    type: 'anime',
    genre: '',
    filter: []
}

export const GenresProvider = ({children}) => {

    const [ genresState, dispatch ] = useReducer(genresReducer, initialState)

    const changeType = ( type = '' ) => {
        
        const action = {
            type: types.AddType,
            payload: type
        }

        dispatch(action);
    }

    const changeGenre = ( genre = '') => {
        const action = {
            type: types.AddGenre,
            payload: genre
        }

        dispatch(action);
    }

    const changeFilter = ( filter = id) => {
        
        const action = {
            type: types.AddFilter,
            payload: filter
        }

        dispatch(action);
    }

    return (

        <GenresContext.Provider value={{
            changeType: changeType,
            changeGenre: changeGenre,
            changeFilter: changeFilter,
            ...genresState
        }}
        >
            {children}
        </GenresContext.Provider>
    )
}
