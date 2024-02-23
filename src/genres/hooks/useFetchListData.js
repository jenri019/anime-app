import { useEffect, useState } from 'react'
import { getListByGenreData } from '../helpers';

export const useFetchListData = (type, filter) => {
    
    const [list, setList] = useState([])
    const [status, setStatus] = useState(200);
    const [isLoading, setisLoading] = useState(true)

    const getByGenreList = async () => {

        setisLoading(true);
        setList([]);
        const searchParam = `${type}?genres=${filter}`
        if(filter !== '') {
            const {list, status} = await getListByGenreData(searchParam);
            setList(list);
            setStatus(status)
        }
        setisLoading(false);
    }

    useEffect(() => {
        getByGenreList();
    }, [filter])

    return {
        list: list,
        status: status,
        isLoading: isLoading
    }
}