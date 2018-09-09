import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleFavorite } from '../actions/filter'
import FavoriteButton from '../components/FavoriteButton'

const mapStateToProps = state => ({
  favorites: state.filterReducer.favorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFavorite }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton)
