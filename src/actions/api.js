/* global fetch:false */
import * as types from './types'

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

export const login = () => (dispatch) => {
  dispatch(loginRequest())
  return fetch(
    'https://arkad-nexpo.herokuapp.com/api/login',
    {
      method: 'GET',
      headers: new Headers().append('Authorization', 'Basic ' + base64.encode('testUser' + ":" + 'testPwd'))
    }
  )
    .then((response) => {
      if (response.status === 200) {
        console.log(response.json())
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(loginFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(loginFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(loginSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(loginFailure(error.message))
    })
}

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
  return fetch(`https://p18.jexpo.se/arkad/exhibitors?filter=[["updated_since","${updated}"]]`, {
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
