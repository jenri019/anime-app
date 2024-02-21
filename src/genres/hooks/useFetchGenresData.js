import { useEffect, useState } from 'react'
import { getGenresData } from '../helpers'

export const useFetchGenresData = (searchType, searchList) => {
    
    const [genres, setGenres] = useState([])
    const [status, setStatus] = useState(200);
    const [isLoading, setisLoading] = useState(true)

    const getGenresList = async () => {
        setisLoading(true);
        setGenres([]);
        const searchParam = `/${searchType}?filter=${searchList}`
        if(searchList !== '') {
            const {genres, status} = await getGenresData(searchParam);
            setGenres(genres);
            setStatus(status)
        }
        setisLoading(false);
    }

    useEffect(() => {
        getGenresList();
    }, [searchType, searchList])

    return {
        genres: genres,
        status: status,
        isLoading: isLoading
    }
}
