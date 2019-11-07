export const initialCharacters = {
  isLoading: true,
  pagesCount: 1,
  characters: [],
  currentPage: 0,
  search: '',
}

// types
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'
export const FETCH_CHARACTERS__SUCCESS = 'FETCH_CHARACTERS__SUCCESS'
export const FETCH_CHARACTERS__FAILURE = 'FETCH_CHARACTERS__FAILURE'

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const CHANGE_PAGE__LOADING = 'CHANGE_PAGE__LOADING'
export const CHANGE_PAGE__SUCCESS = 'CHANGE_PAGE__SUCCESS'
export const CHANGE_PAGE__FAILURE = 'CHANGE_PAGE__FAILURE'

export const CHANGE_SEARCH = 'CHANGE_SEARCH'
export const CHANGE_SEARCH__LOADING = 'CHANGE_SEARCH__LOADING'
export const CHANGE_SEARCH__SUCCESS = 'CHANGE_SEARCH__SUCCESS'
export const CHANGE_SEARCH__FAILURE = 'CHANGE_SEARCH__FAILURE'

export const CLEAR_CHARACTERS_STORE = 'CLEAR_CHARACTERS_STORE'
export const CLEAR_CHARACTERS_STORE__SUCCESS = 'CLEAR_CHARACTERS_STORE__SUCCESS'
export const CLEAR_CHARACTERS_STORE__FAILURE = 'CLEAR_CHARACTERS_STORE__FAILURE'


// actions
export const fetchCharacters = () => (
  {
    type: FETCH_CHARACTERS,
  })

export const changePage = page => (
  {
    type: CHANGE_PAGE,
    payload: {
      page,
    },
  })

export const changeSearch = ({ target }) => (
  {
    type: CHANGE_SEARCH,
    payload: {
      search: target.value,
    },
  })

export const clearCharactersStore = () => (
  {
    type: CLEAR_CHARACTERS_STORE,
  })


// reducer
export default function charactersReducer(state = initialCharacters, action) {
  switch (action.type) {
    case CHANGE_PAGE__LOADING:
    case CHANGE_PAGE__SUCCESS:
    case CHANGE_SEARCH__LOADING:
    case CHANGE_SEARCH__SUCCESS:
    case FETCH_CHARACTERS__SUCCESS:
    case CLEAR_CHARACTERS_STORE__SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: undefined,
      }
    }

    case CHANGE_SEARCH__FAILURE:
    case FETCH_CHARACTERS__FAILURE: {
      return {
        ...state,
        ...action.payload,
        error: action.error,
      }
    }

    case CHANGE_PAGE__FAILURE:
    case CLEAR_CHARACTERS_STORE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state
  }
}
