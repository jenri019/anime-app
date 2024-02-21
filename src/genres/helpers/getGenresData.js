export const getGenresData = async(searchParam = '') => {

    let url = `https://api.jikan.moe/v4/genres${searchParam}`

    const resp = await fetch(url)
    const { data:genres } = await resp.json();

    return {
        genres,
        status: resp.status
    };
}