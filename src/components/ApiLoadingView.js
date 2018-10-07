import React, { Component } from 'react'
import { Modal, View } from 'react-native'
import PropTypes from 'prop-types'
import LoadingView from './LoadingView'
import ErrorView from './ErrorView'

const styles = {
  content: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
}

class ApiLoadingView extends Component {
  componentDidMount() {
    const { updated, loadCompanies } = this.props
    if (updated === 0) {
      loadCompanies()
    }
  }

  render() {
    const {
      loading, error, updated, loadCompanies
    } = this.props
    const { content } = styles
    const success = (!loading && error === '') || updated !== 0
    return (
      <Modal animationType="fade" transparent visible={!success} onRequestClose={() => {}}>
        <View style={content}>
          {loading ? <LoadingView /> : null}
          {error ? <ErrorView loadCompanies={loadCompanies} /> : null}
        </View>
      </Modal>
    )
  }
}

ApiLoadingView.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  updated: PropTypes.number.isRequired,
  loadCompanies: PropTypes.func.isRequired
}

export default ApiLoadingView
