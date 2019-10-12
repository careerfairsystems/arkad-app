import * as types from './types'
import {AsyncStorage} from 'react-native'

const loadLogout = () => {
  AsyncStorage.removeItem('token')
  return (
    {
      type: types.LOGOUT,
    }
  )
}

export default loadLogout
