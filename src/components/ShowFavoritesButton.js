import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'

const ShowFavoritesButton = ({ showFavorites, toggleShowFavorites }) => (
  <Button
    title={showFavorites ? 'Hide favorites' : 'Show favorites'}
    onPress={() => toggleShowFavorites()}
  />
)

ShowFavoritesButton.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired
}

export default ShowFavoritesButton
