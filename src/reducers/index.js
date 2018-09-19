import { combineReducers } from 'redux'
import mapReducer from './map'
import companyReducer from './company'
import eventReducer from './event'
import favoriteReducer from './favorite'

export default combineReducers({
  mapReducer,
  companyReducer,
  eventReducer,
  favoriteReducer
})
