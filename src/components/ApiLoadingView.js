import React from 'react'
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

const { content } = styles
const ApiLoadingView = ({ loading, error, loadCompanies }) => {
  const success = !loading && error === ''
  return (
    <Modal animationType="fade" transparent visible={!success} onRequestClose={() => {}}>
      <View style={content}>
        {loading ? <LoadingView /> : null}
        {error ? <ErrorView error={error} loadCompanies={loadCompanies} /> : null}
      </View>
    </Modal>
  )
}

ApiLoadingView.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadCompanies: PropTypes.func.isRequired
}

export default ApiLoadingView
