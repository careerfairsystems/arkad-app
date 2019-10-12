import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentCard from '../components/StudentCard'


const mapStateToProps = state => ({
  typeLogedin: state.apiReducer.typeLogedin,
  loading: state.apiReducer.loading,
  refreshing: state.companyReducer.refreshing,
  studentCompanyList: state.apiReducer.items,
  myInfo: state.apiReducer.myInfo,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCard)
