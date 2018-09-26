import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const notFavIcon = <Icon name="heart-o" size={25} />
const favIcon = <Icon name="heart" size={25} color="black" />

const styles = {
  headerIcon: { paddingHorizontal: 14 }
}

const ShowFavoritesButton = ({ showFavorites, toggleShowFavorites }) => (
  <TouchableOpacity style={styles.headerIcon} onPress={() => toggleShowFavorites()}>
    {showFavorites ? favIcon : notFavIcon}
  </TouchableOpacity>
)

ShowFavoritesButton.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired
}

export default ShowFavoritesButton
