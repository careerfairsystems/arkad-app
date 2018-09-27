import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StringSimilarity from 'string-similarity'
import { loadCompanies } from '../actions/api'
import { searchCompany } from '../actions/company'
import CompaniesScreen from '../screens/Companies/CompaniesScreen'

const filterCategories = (items, desiredProgramme, weOffer, industry, desiredDegree) => {
  let companies = items
  companies = companies.filter(
    item => (desiredProgramme.length !== 0
      ? item.desiredProgramme.some(element => desiredProgramme.includes(element))
      : true)
      && (weOffer.length !== 0 ? item.weOffer.some(element => weOffer.includes(element)) : true)
      && (industry.length !== 0 ? item.industry.some(element => industry.includes(element)) : true)
      && (desiredDegree.length !== 0
        ? item.desiredDegree.some(element => desiredDegree.includes(element))
        : true)
  )
  return companies
}

const filterFavoritesAndSearch = (items, showFavorites, favorites, searchText) => {
  let companies = items
  companies = showFavorites ? items.filter(company => favorites.indexOf(company.key) !== -1) : items
  if (searchText === '') {
    return companies.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }
  const append = '$' // Append a $ to improve the search, otherwise one character matches are ignored
  const { ratings } = StringSimilarity.findBestMatch(
    append + searchText,
    items.map(item => append + item.name)
  )
  companies = companies
    .map((item) => {
      const rating = ratings.find(value => value.target === append + item.name)
      const sortedItem = { ...item, rating: rating.rating }
      return sortedItem
    })
    .filter(item => item.rating !== 0)
    .sort((a, b) => b.rating - a.rating)
  return companies
}

const mapStateToProps = state => ({
  companyList: filterFavoritesAndSearch(
    filterCategories(
      state.apiReducer.items,
      state.companyReducer.desiredProgramme,
      state.companyReducer.weOffer,
      state.companyReducer.industry,
      state.companyReducer.desiredDegree
    ),
    state.companyReducer.showFavorites,
    state.favoriteReducer.favorites,
    state.companyReducer.searchText
  ),
  refreshing: state.companyReducer.refreshing
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies, searchCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesScreen)
