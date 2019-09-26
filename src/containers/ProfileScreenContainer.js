import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadLogin } from '../actions/api'
import setFirstTime from '../actions/firstTime'
import ProfileLoginScreen from '../screens/Profile/ProfileLoginScreen'



const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn,
  typeLogedin: state.apiReducer.typeLogedin,
  jwt: state.apiReducer.jwt,
  firstTime: state.firstTimeReducer.firstTime,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogin, setFirstTime }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLoginScreen)
