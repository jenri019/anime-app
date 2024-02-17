import { useEffect, useState } from 'react'
import { getCharacterData } from '../helpers'

export const useFetchData = (searchParam) => {
    
    const [characters, setCharacters] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getAnimeList = async () => {
        setisLoading(true);
        setCharacters([]);
        if(searchParam !== '') {
            const newCharacters = await getCharacterData(searchParam);
            setCharacters(newCharacters);
        }
        setisLoading(false);
    }

    useEffect(() => {
        getAnimeList();
    }, [searchParam])

    return {
        characters: characters,
        isLoading: isLoading
    }
}
