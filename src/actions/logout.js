import * as types from './types'
import {AsyncStorage} from 'react-native'

const loadLogout = () => ({
  type: types.LOGOUT,
})

export default loadLogout
