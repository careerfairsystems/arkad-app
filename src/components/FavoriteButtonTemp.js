import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'

const FavoriteButtonTemp = ({ item, favorites, toggleFavorite }) => {
  let favorite = false
  if (favorites.indexOf(item.key) !== -1) {
    favorite = true
  }
  return <Button title={favorite ? 'Fav' : 'Not fav'} onPress={() => toggleFavorite(item.key)} />
}

FavoriteButtonTemp.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default FavoriteButtonTemp
