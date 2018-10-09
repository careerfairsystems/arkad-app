import * as types from '../actions/types'

const initialState = {
  currentMap: '',
  selectedCompany: 0
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_CHANGE_MAP:
      return { ...state, currentMap: action.map }
    case types.TOGGLE_CHANGE_COMPANY:
      return { ...state, selectedCompany: action.company }
    default:
      return state
  }
}

export default mapReducer
