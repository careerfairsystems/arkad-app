import React, { Component } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import LoadingView from '../../components/LoadingView'
import ErrorView from '../../components/ErrorView'
import CompanyListItem from '../../components/listItems/CompanyListItem'

class CompaniesScreen extends Component {
  componentDidMount() {
    const { loadCompanies } = this.props
    loadCompanies()
  }

  render() {
    const {
      navigation,
      companyList,
      loading,
      error,
      showFavorites,
      loadCompanies,
      toggleShowFavorites
    } = this.props
    if (loading) {
      return <LoadingView />
    }
    if (error) {
      return <ErrorView error={error} loadCompanies={loadCompanies} />
    }
    return (
      <FlatList
        data={companyList}
        renderItem={({ item }) => <CompanyListItem navigation={navigation} item={item} />}
      />
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
  showFavorites: PropTypes.bool.isRequired,
  loadCompanies: PropTypes.func.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired
}

export default CompaniesScreen
