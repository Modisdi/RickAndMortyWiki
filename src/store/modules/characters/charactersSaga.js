import {
  put, call, all, takeLatest, select,
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import queryString from 'query-string'
// utils
import { fetchCharactersAxios } from '../../../utils/fetchCharactersAxios'
// types
import {
  initialCharacters,

  FETCH_CHARACTERS,
  FETCH_CHARACTERS__SUCCESS,
  FETCH_CHARACTERS__FAILURE,

  CHANGE_PAGE,
  CHANGE_PAGE__LOADING,
  CHANGE_PAGE__SUCCESS,
  CHANGE_PAGE__FAILURE,

  CHANGE_SEARCH,
  CHANGE_SEARCH__LOADING,
  CHANGE_SEARCH__SUCCESS,
  CHANGE_SEARCH__FAILURE,

  CLEAR_CHARACTERS_STORE,
  CLEAR_CHARACTERS_STORE__SUCCESS,
  CLEAR_CHARACTERS_STORE__FAILURE,
} from './index'
// utils
import { charactersMap } from '../../../utils/charactersMap'


// saga worker
export function* fetchCharactersSaga() {
  try {
    const searchUrl = yield select(state => state.router.location.search)
    let currentPage = 1
    if (searchUrl) {
      const valueQuery = queryString.parse(searchUrl)
      const { page } = valueQuery
      currentPage = (!page || page === 0) ? 'not-found' : Number(page)
    }
    if (currentPage === 'not-found') {
      yield put(push('/not-found'))
    } else {
      const charactersData = yield call(fetchCharactersAxios, currentPage)
      const { results, info } = charactersData
      const characters = charactersMap(results)
      yield put({
        type: FETCH_CHARACTERS__SUCCESS,
        payload: {
          pagesCount: info.pages,
          characters,
          currentPage,
          isLoading: false,
        },
      })
    }
  } catch (error) {
    yield put({
      type: FETCH_CHARACTERS__FAILURE,
      payload: {
        pagesCount: 1,
        currentPage: 2,
        isLoading: false,
      },
      error,
    })
  }
}

export function* changePageSaga(action) {
  const {
    page,
  } = action.payload
  const search = yield select(state => state.charactersReducer.search)
  try {
    yield put({
      type: CHANGE_PAGE__LOADING,
      payload: {
        isLoading: true,
      },
    })
    const charactersData = yield call(fetchCharactersAxios, page, search)
    const { results, info } = charactersData
    const characters = charactersMap(results)
    yield put(push(`/characters?page=${page}`))
    yield put({
      type: CHANGE_PAGE__SUCCESS,
      payload: {
        pagesCount: info.pages,
        characters,
        currentPage: page,
        isLoading: false,
      },
    })
  } catch (error) {
    yield put({
      type: CHANGE_PAGE__FAILURE,
      error,
    })
  }
}

export function* changeSearchSaga(action) {
  const {
    search,
  } = action.payload
  const currentPage = 1
  try {
    yield put({
      type: CHANGE_SEARCH__LOADING,
      payload: {
        search,
        isLoading: true,
      },
    })

    const charactersData = yield call(fetchCharactersAxios, currentPage, search)
    const { results, info } = charactersData
    const characters = charactersMap(results)
    yield put(push(`/characters?page=${currentPage}`))
    yield put({
      type: CHANGE_SEARCH__SUCCESS,
      payload: {
        pagesCount: info.pages,
        characters,
        currentPage,
        isLoading: false,
      },
    })
  } catch (error) {
    yield put({
      type: CHANGE_SEARCH__FAILURE,
      payload: {
        pagesCount: 1,
        characters: [],
        currentPage: 1,
        isLoading: false,
      },
      error,
    })
  }
}

export function* clearCharactersStoreSaga() {
  try {
    yield put({
      type: CLEAR_CHARACTERS_STORE__SUCCESS,
      payload: {
        ...initialCharacters,
      },
    })
  } catch (error) {
    yield put({
      type: CLEAR_CHARACTERS_STORE__FAILURE,
      error,
    })
  }
}


// saga listener
export function* charactersSaga() {
  yield all([
    takeLatest(FETCH_CHARACTERS, fetchCharactersSaga),
    takeLatest(CHANGE_PAGE, changePageSaga),
    takeLatest(CHANGE_SEARCH, changeSearchSaga),
    takeLatest(CLEAR_CHARACTERS_STORE, clearCharactersStoreSaga),
  ])
}
