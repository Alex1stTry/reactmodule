const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const character = 'character'

const urls = {
    episodes,
    character: {
        base: character,
        getById: (id) => `${character}/${id}`
    }
}
export {baseURL,urls}