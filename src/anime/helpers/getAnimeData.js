export const getAnimeData = async(searchParam = 0, type = '') => {
    let url = ``
    switch(type) {
        case 'ID':
            url = `https://api.jikan.moe/v4/anime/${searchParam}/full`
            break;
        default:
            url = `https://api.jikan.moe/v4/anime`;
            break;
    }
    const resp = await fetch(url)
    const { data:animes } = await resp.json();

    return animes;
}