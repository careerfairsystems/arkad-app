import * as types from '../actions/types'

const initialState = {
  logedIn: false
}

const loginReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case types.FETCH_LOGIN_REQUEST:
      return {
        ...state,
        refreshing: true
      }
    case types.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        refreshing: false
      }
    case types.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        refreshing: false
      }
    default:
      return state
  }
}

export default loginReducer
