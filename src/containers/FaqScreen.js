import { connect } from 'react-redux'
import FaqScreen from '../screens/About/FaqScreen'

const mapStateToProps = state => ({
  faqList: state.aboutReducer.faq
})

export default connect(mapStateToProps)(FaqScreen)
