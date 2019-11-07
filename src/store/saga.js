import { fork } from 'redux-saga/effects'
// modules
import { charactersSaga } from './modules/characters/charactersSaga'
import { characterInfoSaga } from './modules/characterInfo/characterInfoSaga'


export default function* rootSaga() {
  yield fork(charactersSaga)
  yield fork(characterInfoSaga)
}
