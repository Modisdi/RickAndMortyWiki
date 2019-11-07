import {
  put, call, all, takeLatest,
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
// utils
import { fetchCharacterInfoAxios } from '../../../utils/fetchCharacterInfoAxios'
// types
import {
  initialCharacterInfo,

  FETCH_CHARACTER_INFO,
  FETCH_CHARACTER_INFO__SUCCESS,
  FETCH_CHARACTER_INFO__FAILURE,

  CLEAR_CHARACTER_INFO_STORE,
  CLEAR_CHARACTER_INFO_STORE__SUCCESS,
  CLEAR_CHARACTER_INFO_STORE__FAILURE,
} from './index'


// saga worker
export function* fetchCharacterInfoSaga(action) {
  const { id } = action.payload
  try {
    if (!id) {
      yield put(push('/not-found'))
    }
    const character = yield call(fetchCharacterInfoAxios, id)
    const {
      name, status, species, gender, origin, location, image,
    } = character
    yield put({
      type: FETCH_CHARACTER_INFO__SUCCESS,
      payload: {
        character: {
          name,
          status,
          species,
          gender,
          origin: origin.name,
          location: location.name,
          image,
        },
        isLoading: false,
      },
    })
  } catch (error) {
    yield put(push('/not-found'))
    yield put({
      type: FETCH_CHARACTER_INFO__FAILURE,
      error,
    })
  }
}

export function* clearCharacterInfoStoreSaga() {
  try {
    yield put({
      type: CLEAR_CHARACTER_INFO_STORE__SUCCESS,
      payload: {
        ...initialCharacterInfo,
      },
    })
  } catch (error) {
    yield put({
      type: CLEAR_CHARACTER_INFO_STORE__FAILURE,
      error,
    })
  }
}


// saga listener
export function* characterInfoSaga() {
  yield all([
    takeLatest(FETCH_CHARACTER_INFO, fetchCharacterInfoSaga),
    takeLatest(CLEAR_CHARACTER_INFO_STORE, clearCharacterInfoStoreSaga),
  ])
}
