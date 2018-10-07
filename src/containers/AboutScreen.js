import { connect } from 'react-redux'
import AboutScreen from '../screens/About/AboutScreen'

const mapStateToProps = state => ({
  aboutUs: state.aboutReducer.aboutUs,
  openingHours: state.aboutReducer.openingHours
})

export default connect(mapStateToProps)(AboutScreen)
