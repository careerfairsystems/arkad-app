import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import './../../global'

const notFavIcon = <Icon name="heart-o" size={21} color="#fff" />
const favIcon = <Icon name="heart" size={21} color="#fff" />

const styles = {
  favoriteView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 12,
    color: global.arkadGray
  },
  headerIcon: {
    alignItems: 'center'
  },
}

const ShowFavoritesButton = ({
  showFavorites,
  toggleShowFavorites,
  searchCompany,
  clearCompanyFilter
}) => (
  <View style={styles.favoriteView}>
    <TouchableOpacity
      style={styles.headerIcon}
      onPress={() => {
        if (!showFavorites) {
          searchCompany('')
          clearCompanyFilter()
        }
        toggleShowFavorites()
      }}
    >
      {showFavorites ? favIcon : notFavIcon}
      <Text style={styles.buttonText}>Favorites</Text>
    </TouchableOpacity>
  </View>
)

ShowFavoritesButton.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired,
  searchCompany: PropTypes.func.isRequired,
  clearCompanyFilter: PropTypes.func.isRequired
}

export default ShowFavoritesButton
