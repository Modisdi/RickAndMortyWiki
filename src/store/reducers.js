import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import charactersReducer from './modules/characters'
import characterInfoReducer from './modules/characterInfo'


export default history => combineReducers({
  router: connectRouter(history),
  charactersReducer,
  characterInfoReducer,
})
