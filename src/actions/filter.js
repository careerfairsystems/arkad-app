import * as types from './types'

export const toggleFavorite = id => ({
  type: types.TOGGLE_FAVORITE,
  id
})

export const toggleShowFavorites = () => ({
  type: types.TOGGLE_SHOW_FAVORITES
})
