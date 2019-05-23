import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadLogin, loadBlips } from '../actions/api'
import { loadLogout } from '../actions/logout'
import ProfileLoginScreen from '../screens/Profile/ProfileLoginScreen'



const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn,
  blips: state.apiReducer.blips
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogin, loadLogout, loadBlips }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLoginScreen)
