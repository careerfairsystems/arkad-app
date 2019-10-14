import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toggleFavorite from '../actions/favorite'
import CompanyDetailFavorite from '../components/CompanyDetailFavorite'

const mapStateToProps = state => ({
  favorites: state.favoriteReducer.favorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFavorite }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetailFavorite)
