import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import apiReducer from './api'
import mapReducer from './map'
import companyReducer from './company'
import eventReducer from './event'
import aboutReducer from './about'
import favoriteReducer from './favorite'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['api', 'favoriteReducer']
}

const apiPersistConfig = {
  key: 'api',
  storage,
  whitelist: ['items', 'filters', 'updated']
}

const rootReducer = combineReducers({
  apiReducer: persistReducer(apiPersistConfig, apiReducer),
  mapReducer,
  companyReducer,
  eventReducer,
  aboutReducer,
  favoriteReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export default persistedReducer
