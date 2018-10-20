import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleChangeCompany } from '../actions/map'
import HouseScreen from '../screens/Map/HouseScreen'

const mapStateToProps = state => ({
  currentMap: state.mapReducer.currentMap,
  selectedCompany: state.mapReducer.selectedCompany,
  companyList: state.apiReducer.items
    .filter(item => item.map === state.mapReducer.currentMap && item.boothNumber !== 0)
    .sort((a, b) => a.boothNumber - b.boothNumber)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseScreen)
