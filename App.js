import React from 'react'
import { StatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import reducers from './src/reducers'
import Router from './src/Router'
import LoadingView from './src/components/LoadingView'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteReducer']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <StatusBar />
      <Router />
    </PersistGate>
  </Provider>
)

export default App
