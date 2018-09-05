import { combineReducers } from 'redux'
import mapReducer from './map'
import companyReducer from './company'
import eventReducer from './event'
import filterReducer from './filter'

export default combineReducers({
  mapReducer,
  companyReducer,
  eventReducer,
  filterReducer
})
