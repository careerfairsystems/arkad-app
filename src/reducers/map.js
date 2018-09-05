import * as types from '../actions/types'

const floors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5']

const initialState = {
  currentFloor: floors[0],
  floors
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_CHANGE_FLOOR:
      return { ...state, currentFloor: action.floor }
    default:
      return state
  }
}

export default mapReducer
