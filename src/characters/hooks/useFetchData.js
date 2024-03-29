import { useEffect, useState } from 'react'
import { getCharacterData } from '../helpers'

export const useFetchData = (searchParam) => {
    
    const [characters, setCharacters] = useState([])
    const [status, setStatus] = useState(200);
    const [isLoading, setisLoading] = useState(true)

    const getCharacterList = async () => {
        setisLoading(true);
        setCharacters([]);
        if(searchParam !== '') {
            const {characters, status} = await getCharacterData(searchParam);
            setCharacters(characters);
            setStatus(status)
        }
        setisLoading(false);
    }

    useEffect(() => {
        getCharacterList();
    }, [searchParam])

    return {
        characters: characters,
        status: status,
        isLoading: isLoading
    }
}
