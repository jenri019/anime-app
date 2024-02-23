import React, { useReducer } from 'react'
import { GenresContext } from './GenresContext'
import { types } from '../types/types'
import { genresReducer } from './genresReducer'

const initialState = {
    type: 'anime',
    genre: 'genres',
    filter: []
}

const init = () => {
    const type = JSON.parse(localStorage.getItem('type')) || 'anime';
    const genre = JSON.parse(localStorage.getItem('genre')) || 'genres';
    let filter = JSON.parse(localStorage.getItem('filter')) || '';

    let array = [];

    if (filter !== '') {
        array = filter.split(",").map(function (x) {
            return parseInt(x, 10);
        });
    }

    return {
        type: type,
        genre: genre,
        filter: (filter === '') ? [] : array
    }
}

export const GenresProvider = ({ children }) => {

    const [genresState, dispatch] = useReducer(genresReducer, initialState, init)

    const changeType = (type = '') => {

        const action = {
            type: types.AddType,
            payload: type
        }

        localStorage.setItem('type', JSON.stringify(type));
        dispatch(action);
    }

    const changeGenre = (genre = '') => {
        const action = {
            type: types.AddGenre,
            payload: genre
        }

        localStorage.setItem('genre', JSON.stringify(genre));
        dispatch(action);
    }

    const changeFilter = (filter = id) => {

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
