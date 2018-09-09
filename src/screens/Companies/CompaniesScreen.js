import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import LoadingView from '../../components/LoadingView'
import ErrorView from '../../components/ErrorView'
import CompanyListItem from '../../components/listItems/CompanyListItem'
import ShowFavoritesButton from '../../containers/ShowFavoritesButton'

class CompaniesScreen extends Component {
  componentDidMount() {
    const { loadCompanies } = this.props
    loadCompanies()
  }

  render() {
    const {
      navigation, companyList, loading, error, loadCompanies
    } = this.props
    if (loading) {
      return <LoadingView />
    }
    if (error) {
      return <ErrorView error={error} loadCompanies={loadCompanies} />
    }
    return (
      <View>
        <ShowFavoritesButton />
        {
          // TODO: temporary placement of ShowFavoritesButton component
          // Don't forget to remove the surrounding View when
          // moving the ShowFavoritesButton component
        }
        <FlatList
          data={companyList}
          renderItem={({ item }) => <CompanyListItem navigation={navigation} company={item} />}
        />
      </View>
    )
  }
}

CompaniesScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  companyList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadCompanies: PropTypes.func.isRequired
}

export default CompaniesScreen
