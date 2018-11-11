import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleShowFavorites, searchCompany, clearCompanyFilter } from '../actions/company'
import ShowFavoritesButton from '../components/ShowFavoritesButton'

const mapStateToProps = state => ({
  showFavorites: state.companyReducer.showFavorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleShowFavorites, searchCompany, clearCompanyFilter }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFavoritesButton)
