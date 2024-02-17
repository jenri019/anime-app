import React, { useEffect, useState } from 'react'
import { getAnimeData } from '../helpers';

export const useFetchData = (searchParam) => {
    
    const [animes, setAnimes] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getAnimeList = async () => {
        setisLoading(true);
        setAnimes([]);
        if(searchParam !== '') {
            const newAnimes = await getAnimeData(searchParam);
            setAnimes(newAnimes);
        }
        setisLoading(false);
    }

    useEffect(() => {
        getAnimeList();
    }, [searchParam])

    return {
        animes: animes,
        isLoading: isLoading
    }
}
