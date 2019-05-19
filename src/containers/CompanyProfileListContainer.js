import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadLogin } from '../actions/api'
import ProfileLoginScreen from '../screens/Profile/CompanyProfileListScreen'



const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogin }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLoginScreen)
