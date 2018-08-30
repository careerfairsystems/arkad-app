import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import loadCompanies from '../actions/company'
import CompaniesScreen from '../screens/Companies/CompaniesScreen'

const mapStateToProps = state => ({
  companyList: state.filterReducer.showFavorites
    ? state.companyReducer.items.filter(
      company => state.filterReducer.favorites.indexOf(company.key) !== -1
    )
    : state.companyReducer.items,
  loading: state.companyReducer.loading,
  error: state.companyReducer.error
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesScreen)
