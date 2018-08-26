/* global fetch:false */
import { Alert } from 'react-native'

export const loadCompanies = () => fetch(
  'https://p17.jexpo.se/arkad/exhibitors?getAttributes=true&filter=["workspace:2018","published:true"]',
  {
    method: 'GET'
  }
)
  .then(response => response.json())
  .then(responseJson => responseJson.results)
  .catch((error) => {
    Alert.alert(error.message)
  })

// TODO: add more functions or make loadCompanies default
