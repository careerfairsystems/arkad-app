import * as types from './types'

const toggleFavorite = id => ({
  type: types.TOGGLE_FAVORITE,
  id
})

export default toggleFavorite
