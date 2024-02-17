export const getCharacterData = async(searchParam = '') => {
    if(searchParam === '?q=') {
        return []
    };

    let url = `https://api.jikan.moe/v4/characters${searchParam}`

    const resp = await fetch(url)
    const { data:characters } = await resp.json();

    return characters;
}