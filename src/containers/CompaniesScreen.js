import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import loadCompanies from '../actions/company'
import { toggleShowFavorites } from '../actions/filter'
import CompaniesScreen from '../screens/Companies/CompaniesScreen'

const mapStateToProps = state => ({
  companyList: state.companyReducer.items,
  loading: state.companyReducer.loading,
  error: state.companyReducer.error,
  showFavorites: state.filterReducer.showFavorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies, toggleShowFavorites }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesScreen)
