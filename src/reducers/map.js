import * as types from '../actions/types'

const maps = [
  'Kårhuset',
  'Stuiecentrum, floor 1',
  'Stuiecentrum, floor 2',
  'E-huset',
  'Matteannexet'
]

const initialState = {
  currentMap: maps[0],
  maps
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_CHANGE_MAP:
      return { ...state, currentMap: action.map }
    default:
      return state
  }
}

export default mapReducer
