export const getMangaData = async(searchParam = '') => {
    if(searchParam === '?q=') {
        return []
    };

    let url = `https://api.jikan.moe/v4/manga${searchParam}`

    const resp = await fetch(url)
    const { data:manga } = await resp.json();

    return {
        manga,
        status: resp.status
    };
}