import React from 'react'
import { StatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import reducers from './src/reducers'
import Router from './src/Router'
import LoadingView from './src/components/LoadingView'
import AppStateHandlerContainer from './src/containers/AppStateHandler'

const store = createStore(reducers, applyMiddleware(thunk))
const persistor = persistStore(store)

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <AppStateHandlerContainer />
      <StatusBar barStyle="light-content" />
      <Router />
    </PersistGate>
  </Provider>
)

export default App
