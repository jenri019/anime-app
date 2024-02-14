export const getAnimeData = async(searchParam = '', type = '') => {
    let url = ``

    switch(type) {
        case 'ID':
            url = `https://api.jikan.moe/v4/anime/${searchParam}`
            console.log('BUSQUEDA DE ID')
            break;
        default:
            url = `https://api.jikan.moe/v4/anime?letter=${searchParam}&limit=10`;
            console.log('BUSQUEDA COMLETA POR LETRA')
            break;
    }

    const resp = await fetch(url)
    const { data:animes } = await resp.json();

    return animes;
}