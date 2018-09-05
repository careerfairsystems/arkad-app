import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const notFavIcon = <Icon name="heart-o" size={25} />
const favIcon = <Icon name="heart" size={25} color="red" />

const FavoriteButton = ({ company, favorites, toggleFavorite }) => {
  let favorite = false
  if (favorites.indexOf(company.key) !== -1) {
    favorite = true
  }
  return (
    <TouchableOpacity onPress={() => toggleFavorite(company.key)}>
      {favorite ? favIcon : notFavIcon}
    </TouchableOpacity>
  )
}

FavoriteButton.propTypes = {
  company: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default FavoriteButton
