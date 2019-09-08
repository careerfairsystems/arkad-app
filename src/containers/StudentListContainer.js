import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentList from '../screens/Profile/StudentList'


const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList)
