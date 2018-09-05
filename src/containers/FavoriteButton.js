import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleFavorite } from '../actions/filter'
import FavoriteButton from '../components/FavoriteButtonTemp'
// TODO: replace the above component with the real FavoriteButton component once it's implemented
// NOTE: look into FavoriteButtonTemp to see how to determine if the company is favorite or not

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
