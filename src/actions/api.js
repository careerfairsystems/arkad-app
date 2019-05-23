/* global fetch:false */
import * as types from './types'
import base64 from 'react-native-base64'

const fetchCompaniesRequest = () => ({
  type: types.FETCH_COMPANIES_REQUEST
})

const fetchCompaniesSuccess = companies => ({
  type: types.FETCH_COMPANIES_SUCCESS,
  companies
})

const fetchCompaniesFailure = error => ({
  type: types.FETCH_COMPANIES_FAILURE,
  error
})

export const loadCompanies = () => (dispatch) => {
  dispatch(fetchCompaniesRequest())
  return fetch(
    'https://p18.jexpo.se/arkad/exhibitors?getAttributes=true&filter=["workspace:2018","published:true"]',
    {
      method: 'GET'
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchCompaniesFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchCompaniesFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchCompaniesSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchCompaniesFailure(error.message))
    })
}

const fetchUpdatedSinceRequest = () => ({
  type: types.FETCH_UPDATED_SINCE_REQUEST
})

const fetchUpdatedSinceSuccess = companyIds => ({
  type: types.FETCH_UPDATED_SINCE_SUCCESS,
  companyIds
})

const fetchUpdatedSinceFailure = error => ({
  type: types.FETCH_UPDATED_SINCE_FAILURE,
  error
})

export const loadUpdatedSince = updated => (dispatch) => {
  dispatch(fetchUpdatedSinceRequest())
  // old filter '?filter=[["updated_since","${updated}"]]'
  return fetch(`https://p18.jexpo.se/arkad/exhibitors`, {
    method: 'GET'
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchUpdatedSinceFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchUpdatedSinceFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchUpdatedSinceSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchUpdatedSinceFailure(error.message))
    })
}

const fetchLoginRequest = () => ({
  type: types.FETCH_LOGIN_REQUEST
})

const fetchLoginSuccess = () => ({
  type: types.FETCH_LOGIN_SUCCESS,
  logedIn: true
})

const fetchLoginFailure = error => ({
  type: types.FETCH_LOGIN_FAILURE,
  error
})

export const loadLogin = (username, password) => (dispatch) => {
  dispatch(fetchLoginRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/login?email=${username}&password=${password}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchLoginFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchLoginFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchLoginSuccess())
      }
    })
    .catch((error) => {
      dispatch(fetchLoginFailure(error.message))
    })
}

// const logout = () => ({
//   type: types.LOGOUT
// })
//
// export const loadLogout = () => (dispatch) => {
//   dispatch(logout())
// }
