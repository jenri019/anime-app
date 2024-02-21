export const getListByGenreData = async(searchParam = '') => {

    let url = `https://api.jikan.moe/v4/${searchParam}`

    const resp = await fetch(url)
    const { data:list } = await resp.json();

    return {
        list,
        status: resp.status
    };
}