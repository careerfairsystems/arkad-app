import * as types from '../actions/types'

const initialState = {
  favorites: []
}

const favoriteReducer = (state = initialState, action) => {
  let indexOf = -1
  let newFavorites = []
  switch (action.type) {
    case types.TOGGLE_FAVORITE:
      indexOf = state.favorites.indexOf(action.id)
      if (indexOf === -1) {
        return { ...state, favorites: [...state.favorites, action.id] }
      }
      newFavorites = [...state.favorites]
      newFavorites.splice(indexOf, 1)
      return { ...state, favorites: newFavorites }
    default:
      return state
  }
}

export default favoriteReducer
