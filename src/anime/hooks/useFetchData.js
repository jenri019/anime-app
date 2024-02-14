import React, { useEffect, useState } from 'react'
import { getAnimeData } from '../helpers';

export const useFetchData = (searchParam, type) => {
    
    const [animes, setAnimes] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getAnimeList = async () => {
        setisLoading(true);
        const newAnimes = await getAnimeData(searchParam, type);
        setAnimes(newAnimes);
        setisLoading(false);
    }

    useEffect(() => {
        getAnimeList();
    }, [searchParam, type])

    return {
        animes: animes,
        isLoading: isLoading
    }
}
