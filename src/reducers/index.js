import { combineReducers } from 'redux'
import companyReducer from './company'
import eventReducer from './event'
import favoriteReducer from './favorite'

export default combineReducers({
  companyReducer,
  eventReducer,
  favoriteReducer
})
