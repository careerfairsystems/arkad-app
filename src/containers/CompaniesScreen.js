import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StringSimilarity from 'string-similarity'
import { searchCompany } from '../actions/company'
import CompaniesScreen from '../screens/Companies/CompaniesScreen'

const filter = (items, showFavorites, favorites, searchText) => {
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
  companyList: filter(
    state.companyReducer.items,
    state.companyReducer.showFavorites,
    state.favoriteReducer.favorites,
    state.companyReducer.searchText
  )
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesScreen)
