import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentCard from '../screens/Profile/CompanyStudentCard'
import { commentRateStudent, getBlips } from '../actions/api'


const mapStateToProps = state => ({
  typeLogedin: state.apiReducer.typeLogedin,
  refreshing: state.companyReducer.refreshing,
  studentCompanyList: state.apiReducer.items,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ commentRateStudent, getBlips }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCard)
