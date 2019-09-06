import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadLogin } from '../actions/api'
import ProfileLoginScreen from '../screens/Profile/ProfileLoginScreen'



const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn,
  typeLogedin: state.apiReducer.typeLogedin
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogin }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLoginScreen)
