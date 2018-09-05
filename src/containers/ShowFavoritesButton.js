import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleShowFavorites } from '../actions/filter'
import ShowFavoritesButton from '../components/ShowFavoritesButton'

const mapStateToProps = state => ({
  showFavorites: state.filterReducer.showFavorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleShowFavorites }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFavoritesButton)
