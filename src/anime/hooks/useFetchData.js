import React, { useEffect, useState } from 'react'
import { getAnimeData } from '../helpers';

export const useFetchData = (name, type) => {
    
    const [animes, setAnimes] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getAnimes = async () => {
        const newAnimes = await getAnimeData(name, type);
        setAnimes(newAnimes);
        setisLoading(false);
    }

    useEffect(() => {
        getAnimes();
    }, [])

    return {
        animes: animes,
        isLoading: isLoading
    }
}
