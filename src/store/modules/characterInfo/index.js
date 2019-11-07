export const initialCharacterInfo = {
  character: {},
  isLoading: true,
}

// types
export const FETCH_CHARACTER_INFO = 'FETCH_CHARACTER_INFO'
export const FETCH_CHARACTER_INFO__SUCCESS = 'FETCH_CHARACTER_INFO__SUCCESS'
export const FETCH_CHARACTER_INFO__FAILURE = 'FETCH_CHARACTER_INFO__FAILURE'

export const CLEAR_CHARACTER_INFO_STORE = 'CLEAR_CHARACTER_INFO_STORE'
export const CLEAR_CHARACTER_INFO_STORE__SUCCESS = 'CLEAR_CHARACTER_INFO_STORE__SUCCESS'
export const CLEAR_CHARACTER_INFO_STORE__FAILURE = 'CLEAR_CHARACTER_INFO_STORE__FAILURE'


// actions
export const fetchCharacterInfo = id => (
  {
    type: FETCH_CHARACTER_INFO,
    payload: {
      id,
    },
  })

export const clearCharacterInfoStore = () => (
  {
    type: CLEAR_CHARACTER_INFO_STORE,
  })


// reducer
export default function characterInfoReducer(state = initialCharacterInfo, action) {
  switch (action.type) {
    case FETCH_CHARACTER_INFO__SUCCESS:
    case CLEAR_CHARACTER_INFO_STORE__SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: undefined,
      }
    }

    case FETCH_CHARACTER_INFO__FAILURE:
    case CLEAR_CHARACTER_INFO_STORE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state
  }
}
