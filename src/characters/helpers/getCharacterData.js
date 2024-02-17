export const getCharacterData = async(searchParam = '', type = '') => {
    let url = ``

    switch(type) {
        case 'ID':
            url = `https://api.jikan.moe/v4/characters/${searchParam}/full`
            break;
        default:
            url = `https://api.jikan.moe/v4/characters?q=${searchParam}&limit=10`;
            break;
    }

    const resp = await fetch(url)
    const { data:characters } = await resp.json();

    return characters;
}