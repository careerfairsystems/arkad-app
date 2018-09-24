import { connect } from 'react-redux'
import CompanyFilterScreen from '../screens/Companies/CompanyFilterScreen'

const mapStateToProps = state => ({
  allFilters: state.companyReducer.allFilters
})

export default connect(mapStateToProps)(CompanyFilterScreen)
