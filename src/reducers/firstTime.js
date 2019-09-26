import * as types from '../actions/types'

const initialState = {
  firstTime: true
}

const firstTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIRSTTIME:
      return {
        ...state,
        firstTime: false,
      }
    default:
      return state
  }
}

export default firstTimeReducer
