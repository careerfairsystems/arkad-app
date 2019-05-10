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
  console.log("INNE I LOADCOMPANIES")
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

const fetchLoginRequest = () => ({
  type: types.FETCH_LOGIN_REQUEST
})

const fetchLoginSuccess = login => ({
  type: types.FETCH_LOGIN_SUCCESS,
  login
})

const fetchLginFailure = error => ({
  type: types.FETCH_LOGIN_FAILURE,
  error
})


// let username = 'arvid.pilhall@me.com';
// let password = '123456789';
//
// let headers = new Headers();
//
// headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

export const loadLogin = (username, password) => (dispatch) => {
  console.log(username)
  console.log(password)
  dispatch(fetchLoginRequest())
  return fetch(
    'https://arkad-nexpo.herokuapp.com/api/login?email=arvid.pilhall@me.com&password=123456789',
    {
      method: 'POST',
    }
  )
    .then((response) => {
      console.log("STATUS")
      console.log(response.status)
      if (response.status === 200) {
        console.log("YEY DET LYCKADES!")
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          console.log("FUUUUUK ERROR 1")
          console.log(responseJson.error.title)
          dispatch(fetchLoginFailure(responseJson.error.title))
        })
        .catch((error) => {
          console.log("FUUUUUK ERROR 2")
          console.log(error.message)
          dispatch(fetchLoginFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchLoginSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      console.log("FUUUUUK ERROR 4")
      dispatch(fetchLoginFailure(error.message))
    })
}
