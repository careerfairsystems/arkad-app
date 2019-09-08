import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import loadLogout from '../actions/logout'
import LogoutButton from '../components/LogoutButton'

const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogout }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)
