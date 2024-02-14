import React, { useEffect, useState } from 'react'
import { getAnimeData } from '../helpers';

export const useFetchData = (searchParam, type) => {
    
    const [animes, setAnimes] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getAnimeList = async () => {
        setisLoading(true);
        console.log('Cargando')
        const newAnimes = await getAnimeData(searchParam, type);
        setAnimes(newAnimes);
        console.log('HECHO')
        setisLoading(false);
    }

    useEffect(() => {
        getAnimeList();
    }, [])

    return {
        animes: animes,
        isLoading: isLoading
    }
}
