import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Router from './src/Router'

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <Router />
  </SafeAreaView>
)

export default App
