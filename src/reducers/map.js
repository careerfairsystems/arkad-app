import * as types from '../actions/types'

const maps = [
  'Kårhuset',
  'E-huset',
  'Studiecentrum, floor 1',
  'Studiecentrum, floor 2',
  'Matteannexet, floor 1',
  'Matteannexet, floor 2'
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
