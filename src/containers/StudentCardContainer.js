import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentCard from '../screens/Profile/StudentCard'


const mapStateToProps = state => ({

})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCard)
