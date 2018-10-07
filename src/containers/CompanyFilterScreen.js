import { connect } from 'react-redux'
import CompanyFilterScreen from '../screens/Companies/CompanyFilterScreen'

const mapStateToProps = state => ({
  filters: state.apiReducer.filters
})

export default connect(mapStateToProps)(CompanyFilterScreen)
