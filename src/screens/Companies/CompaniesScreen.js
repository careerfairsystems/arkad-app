import React, { Component } from 'react'
import {
  TextInput, Keyboard, SectionList, View, Text
} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoadingView from '../../components/LoadingView'
import ErrorView from '../../components/ErrorView'
import CompanyListItem from '../../components/listItems/CompanyListItem'
import ShowFavoritesButton from '../../containers/ShowFavoritesButton'

const styles = {
  content: { flex: 1 },
  searchContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingLeft: 8,
    marginVertical: 8,
    marginLeft: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  searchField: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingRight: 8,
    paddingLeft: 5,
    marginVertical: 8,
    marginRight: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },
  sectionHeader: {
    padding: 8,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
}

class CompaniesScreen extends Component {
  componentDidMount() {
    const { loadCompanies } = this.props
    loadCompanies()
  }

  renderSearchField() {
    const { searchCompany } = this.props
    const { searchContainer, searchIconContainer, searchField } = styles
    return (
      <View style={searchContainer}>
        <View style={searchIconContainer}>
          <Icon name="search" size={14} color="#ccc" />
        </View>
        <TextInput
          style={searchField}
          onChangeText={text => searchCompany(text)}
          clearButtonMode="while-editing"
          underlineColorAndroid="transparent"
          placeholder="Search company"
          placeholderTextColor="#ccc"
        />
      </View>
    )
  }

  renderSectionHeader = (title) => {
    const { sectionHeader } = styles
    return (
      <View style={sectionHeader}>
        <Text>{title}</Text>
      </View>
    )
  }

  render() {
    const {
      navigation, companyList, loading, error, loadCompanies
    } = this.props
    const { content } = styles
    if (loading) {
      return <LoadingView />
    }
    if (error) {
      return <ErrorView error={error} loadCompanies={loadCompanies} />
    }
    let sections
    if (companyList.length === 0) {
      sections = [{ title: 'No matches found', data: [] }]
    } else {
      sections = companyList.reduce((a, b) => {
        const item = a
        const firstLetter = b.name[0].toUpperCase()
        if (item[firstLetter]) {
          item[firstLetter].push(b)
        } else {
          item[firstLetter] = [b]
        }
        return item
      }, {})
      sections = Object.keys(sections).map(key => ({ title: key, data: sections[key] }))
    }
    return (
      <View style={content}>
        <ShowFavoritesButton />
        {
          // TODO: temporary placement of ShowFavoritesButton component
          // Don't forget to remove the surrounding View when
          // moving the ShowFavoritesButton component
        }
        <SectionList
          ListHeaderComponent={this.renderSearchField()}
          renderItem={({ item }) => <CompanyListItem navigation={navigation} company={item} />}
          renderSectionHeader={({ section: { title } }) => this.renderSectionHeader(title)}
          sections={sections}
          onScrollBeginDrag={() => Keyboard.dismiss()}
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
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      didYouKnow: PropTypes.string.isRequired,

      employees: PropTypes.shape({
        local: PropTypes.string.isRequired,
        global: PropTypes.string.isRequired
      }).isRequired,

      weOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      desiredProgramme: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      desiredDegree: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      industry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

      contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
      }).isRequired,

      mapPosition: PropTypes.string.isRequired,

      logotypeUrl: PropTypes.string.isRequired,
      brochureUrl: PropTypes.string.isRequired,
      websiteUrl: PropTypes.string.isRequired,
      linkedInUrl: PropTypes.string.isRequired
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadCompanies: PropTypes.func.isRequired,
  searchCompany: PropTypes.func.isRequired
}

export default CompaniesScreen
