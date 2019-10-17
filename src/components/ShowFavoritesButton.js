import React from 'react'
import { TouchableOpacity, View, Text, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import './../../global'

const notFavIcon = (size) => (<Icon name="heart-o" size={size} color="#fff" />)
const favIcon = (size) => (<Icon name="heart" size={size} color="#fff" />)


const styles = {
  favoriteView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  buttonText: {
    color: global.arkadGray
  },
  headerIcon: {
    alignItems: 'center'
  },
}

const FavoriteItem = ({size, padding, fontSize, }) => (
  <View style={[styles.favoriteView, {paddingHorizontal: 8}]}>
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
      {showFavorites ? favIcon(size) : notFavIcon(size)}
      <Text style={[styles.buttonText, {fontSize: '${fontSize}'}]}>Favorites</Text>
    </TouchableOpacity>
  </View>
)

const windowWidth = Dimensions.get('window').width

const ShowFavoritesButton = ({
  showFavorites,
  toggleShowFavorites,
  searchCompany,
  clearCompanyFilter
}) => {
  if(windowWidth < 350) {
    return (
      <View style={[styles.favoriteView, {paddingHorizontal: 0}]}>
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
          {showFavorites ? favIcon(16) : notFavIcon(16)}
          <Text style={[styles.buttonText, {fontSize: 9}]}>Favorites</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View style={[styles.favoriteView, {paddingHorizontal: 8}]}>
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
          {showFavorites ? favIcon(21) : notFavIcon(21)}
          <Text style={[styles.buttonText, {fontSize: 12}]}>Favorites</Text>
        </TouchableOpacity>
      </View>
    )
  }

}


ShowFavoritesButton.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired,
  searchCompany: PropTypes.func.isRequired,
  clearCompanyFilter: PropTypes.func.isRequired
}

export default ShowFavoritesButton
