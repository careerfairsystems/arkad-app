import { Component } from 'react'
import { AppState, Platform, StatusBar } from 'react-native'
import PropTypes from 'prop-types'

class AppStateHandler extends Component {
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    this.loadCompaniesIfNeeded()
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentDidUpdate() {
    const {
      notUpdated, loading, error, updated, loadCompanies
    } = this.props
    if (notUpdated.length > 0 && !loading && error === '' && updated !== 0) {
      loadCompanies()
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (nextAppState) => {
    const { appState } = this.state
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      this.loadCompaniesIfNeeded()
    }
    this.setState({ appState: nextAppState })
  }

  loadCompaniesIfNeeded() {
    const { loading, updated, loadUpdatedSince } = this.props
    if (!loading && updated !== 0) {
      loadUpdatedSince(updated)
    }
  }

  render() {
    const { loading } = this.props
    if (Platform.OS === 'ios') {
      if (loading) {
        StatusBar.setNetworkActivityIndicatorVisible(true)
      } else {
        StatusBar.setNetworkActivityIndicatorVisible(false)
      }
    }
    return null
  }
}

AppStateHandler.propTypes = {
  notUpdated: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  updated: PropTypes.number.isRequired,
  loadCompanies: PropTypes.func.isRequired,
  loadUpdatedSince: PropTypes.func.isRequired
}

export default AppStateHandler
