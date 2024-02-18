export const getAnimeData = async(searchParam = '') => {
    if(searchParam === '?q=') {
        return []
    };

    let url = `https://api.jikan.moe/v4/anime${searchParam}`

    const resp = await fetch(url)
    const { data:animes } = await resp.json();

    return {
        animes,
        status: resp.status
    };
}