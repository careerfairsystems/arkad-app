import { combineReducers } from 'redux'
import mapReducer from './map'
import companyReducer from './company'
import eventReducer from './event'
import aboutReducer from './about'
import favoriteReducer from './favorite'

export default combineReducers({
  mapReducer,
  companyReducer,
  eventReducer,
  aboutReducer,
  favoriteReducer
})
