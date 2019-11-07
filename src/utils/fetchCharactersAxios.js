import * as axios from 'axios'

export const fetchCharactersAxios = (page, search) => {
  if (search) {
    return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`)
      .then(({ data }) => data)
  }
  return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(({ data }) => data)
}
