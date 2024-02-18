import React, { useEffect, useState } from 'react'
import { getAnimeData } from '../helpers';

export const useFetchData = (searchParam) => {
    
    const [animes, setAnimes] = useState([])
    const [status, setStatus] = useState(200)
    const [isLoading, setisLoading] = useState(true)

    const getAnimeList = async () => {
        setisLoading(true);
        setAnimes([]);
        if(searchParam !== '') {
            const {animes, status} = await getAnimeData(searchParam);
            setAnimes(animes);
            setStatus(status)
        }
        setisLoading(false);
    }

    useEffect(() => {
        getAnimeList();
    }, [searchParam])

    return {
        animes: animes,
        status: status,
        isLoading: isLoading
    }
}
