import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCompanies, searchCompany } from '../actions/company'
import CompaniesScreen from '../screens/Companies/CompaniesScreen'

const mapStateToProps = state => ({
  companyList: state.companyReducer.showFavorites
    ? state.companyReducer.items.filter(
      company => state.favoriteReducer.favorites.indexOf(company.key) !== -1
    )
    : state.companyReducer.items,
  loading: state.companyReducer.loading,
  error: state.companyReducer.error
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies, searchCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesScreen)
