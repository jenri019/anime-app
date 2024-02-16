export const getAnimeData = async(searchParam = '', type = '') => {
    let url = ``

    const resp = await fetch(url)
    const { data:characters } = await resp.json();

    return characters;
}