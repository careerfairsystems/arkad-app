import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentCard from '../screens/Profile/CompanyStudentCard'
import { commentRateStudent, getBlips } from '../actions/api'
import unsetSaved from '../actions/saved'


const mapStateToProps = state => ({
  typeLogedin: state.apiReducer.typeLogedin,
  loading: state.apiReducer.loading,
  refreshing: state.companyReducer.refreshing,
  studentCompanyList: state.apiReducer.items,
  save_success: state.apiReducer.save_success,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ commentRateStudent, getBlips, unsetSaved }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCard)
