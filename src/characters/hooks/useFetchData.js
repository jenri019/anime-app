import { useEffect, useState } from 'react'
import { getCharacterData } from '../helpers'

export const useFetchData = (searchParam, type) => {
    
    const [characters, setCharacters] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getAnimeList = async () => {
        setisLoading(true);
        setCharacters([]);
        if(searchParam !== '') {
            const newCharacters = await getCharacterData(searchParam, type);
            setCharacters(newCharacters);
        }
        setisLoading(false);
    }

    useEffect(() => {
        getAnimeList();
    }, [searchParam, type])

    return {
        characters: characters,
        isLoading: isLoading
    }
}
