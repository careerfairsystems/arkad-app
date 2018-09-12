import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleShowFavorites } from '../actions/company'
import ShowFavoritesButton from '../components/ShowFavoritesButton'

const mapStateToProps = state => ({
  showFavorites: state.companyReducer.showFavorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleShowFavorites }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFavoritesButton)
