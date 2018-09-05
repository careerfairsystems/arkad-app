import { combineReducers } from 'redux'
import companyReducer from './company'
import eventReducer from './event'
import filterReducer from './filter'

export default combineReducers({
  companyReducer,
  eventReducer,
  filterReducer
})
