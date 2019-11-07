import * as axios from 'axios'

export const fetchCharacterInfoAxios = id => (
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => data)
)
