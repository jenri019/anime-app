import { useEffect, useState } from 'react'
import { getMangaData } from '../helpers'

export const useFetchData = (searchParam) => {
    
    const [manga, setManga] = useState([])
    const [status, setStatus] = useState(200);
    const [isLoading, setisLoading] = useState(true)

    const getMangaList = async () => {
        setisLoading(true);
        setManga([]);
        if(searchParam !== '') {
            const {manga, status} = await getMangaData(searchParam);
            setManga(manga);
            setStatus(status)
        }
        setisLoading(false);
    }

    useEffect(() => {
        getMangaList();
    }, [searchParam])

    return {
        manga: manga,
        status: status,
        isLoading: isLoading
    }
}
