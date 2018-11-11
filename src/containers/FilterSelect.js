import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleShowFavorites, addCompanyFilter } from '../actions/company'
import FilterSelect from '../components/FilterSelect'

const mapStateToProps = state => ({
  desiredProgramme: state.companyReducer.desiredProgramme,
  weOffer: state.companyReducer.weOffer,
  industry: state.companyReducer.industry,
  desiredDegree: state.companyReducer.desiredDegree,
  showFavorites: state.companyReducer.showFavorites
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleShowFavorites, addCompanyFilter }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSelect)
