export const getAnimeData = async(searchParam = '', type = '') => {
    let url = ``

    switch(type) {
        case 'ID':
            url = `https://api.jikan.moe/v4/anime/${searchParam}`
            break;
        default:
            url = `https://api.jikan.moe/v4/anime?letter=${searchParam}&limit=10`;
            break;
    }

    const resp = await fetch(url)
    const { data:animes } = await resp.json();

    return animes;
}