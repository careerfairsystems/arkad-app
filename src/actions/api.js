/* global fetch:false */
import * as types from './types'
import base64 from 'react-native-base64'
import {AsyncStorage} from 'react-native'

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

export const loadCompanies = () => async (dispatch) => {
  dispatch(fetchCompaniesRequest())
  return fetch(
    'https://p18.jexpo.se/arkad/exhibitors?getAttributes=true&filter=["workspace:2019","published:true"]',
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
})

const fetchLoginFailure = error => ({
  type: types.FETCH_LOGIN_FAILURE,
  error
})

export const loadLogin = (username, password) => (dispatch) => {
  dispatch(fetchLoginRequest())
  return fetch(
    // `https://arkad-nexpo.herokuapp.com/api/login?email=${username}&password=${password}`,
    `https://arkad-nexpo.herokuapp.com/api/login?email=alexanderlundst@gmail.com&password=123456789`,
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
        AsyncStorage.setItem('token', responseJson.data.jwt)
        dispatch(fetchLoginSuccess())
      }
    })
    .catch((error) => {
      dispatch(fetchLoginFailure(error.message))
    })
}

const fetchCommentStudentRequest = () => ({
  type: types.FETCH_COMMENT_STUDENT_REQUEST
})

const fetchCommentStudentSuccess = (data) => ({
  type: types.FETCH_COMMENT_STUDENT_SUCCESS,
})

const fetchCommentStudentFailure = error => ({
  type: types.FETCH_COMMENT_STUDENT_FAILURE,
  error
})

export const commentRateStudent = (studentId, rating, comment) => async (dispatch) => {
  var newComment = comment.replace(/[\r\n]/g, "%0A")
  dispatch(fetchCommentStudentRequest())
  const token = await AsyncStorage.getItem('token')
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/blips/${studentId}?rating=${rating}&comment=${newComment}`,
    {
      method: 'PATCH',
      headers: {
      'Authorization': 'Bearer ' + token
      }
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchCommentStudentFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchCommentStudentFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchCommentStudentSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchCommentStudentFailure(error.message))
    })
}

const fetchBlipsRequest = () => ({
  type: types.FETCH_BLIPS_REQUEST
})

const fetchBlipsSuccess = (data) => ({
  type: types.FETCH_BLIPS_SUCCESS,
  blips: data,
})

const fetchBlipsFailure = error => ({
  type: types.FETCH_BLIPS_FAILURE,
  error
})

export const getBlips = () => async (dispatch) => {
  dispatch(fetchBlipsRequest())
  const token = await AsyncStorage.getItem('token')
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/blips`,
    {
      method: 'GET',
      headers: {
      'Authorization': 'Bearer ' + token
      }
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchBlipsFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchBlipsFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        console.log(responseJson.data)
        dispatch(fetchBlipsSuccess(responseJson.data))
      }
    })
    .catch((error) => {
      dispatch(fetchBlipsFailure(error.message))
    })
}

const fetchRemoveBlippedStudentRequest = () => ({
  type: types.FETCH_REMOVE_BLIPPED_STUDENT_REQUEST
})

const fetchRemoveBlippedStudentSuccess = (data) => ({
  type: types.FETCH_REMOVE_BLIPPED_STUDENT_SUCCESS,
  blips: data,
})

const fetchRemoveBlippedStudentFailure = error => ({
  type: types.FETCH_REMOVE_BLIPPED_STUDENT_FAILURE,
  error
})

export const removeBlippedStudent = (studentId) => async (dispatch) => {
  const token = await AsyncStorage.getItem('token')
  dispatch(fetchRemoveBlippedStudentRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/blips/${studentId}`,
    {
      method: 'DELETE',
      headers: {
      'Authorization': 'Bearer ' + token
      }
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchRemoveBlippedStudentFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchRemoveBlippedStudentFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchRemoveBlippedStudentSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchRemoveBlippedStudentFailure(error.message))
    })
}

const fetchStudentInfoRequest = () => ({
  type: types.FETCH_STUDENT_INFO_REQUEST
})

const fetchStudentInfoSuccess = (data) => ({
  type: types.FETCH_STUDENT_INFO_SUCCESS,
  studentInfo: data,
})

const fetchStudentInfoFailure = error => ({
  type: types.FETCH_STUDENT_INFO_FAILURE,
  error
})

export const getStudentInfo = (student_id) => (dispatch) => {
  dispatch(fetchStudentInfoRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/comment/${student_id}`,
    {
      method: 'GET',
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchStudentInfoFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchStudentInfoFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {

        dispatch(fetchStudentInfoSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchStudentInfoFailure(error.message))
    })
}

const fetchCompanyRepresentativesRequest = () => ({
  type: types.FETCH_COMPANY_REPRESENTATIVES_REQUEST
})

const fetchCompanyRepresentativesSuccess = (data) => ({
  type: types.FETCH_COMPANY_REPRESENTATIVES_SUCCESS,
  companyRepresentatives: data,
})

const fetchCompanyRepresentativesFailure = error => ({
  type: types.FETCH_COMPANY_REPRESENTATIVES_FAILURE,
  error
})

export const getCompanyRepresentatives = () => (dispatch) => {
  dispatch(fetchCompanyRepresentativesRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/representatives`,
    {
      method: 'GET',
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchCompanyRepresentativesFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchCompanyRepresentativesFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchCompanyRepresentativesSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchCompanyRepresentativesFailure(error.message))
    })
}

const fetchCreateBlipRequest = () => ({
  type: types.FETCH_CREATE_BLIP_REQUEST
})

const fetchCreateBlipSuccess = (data) => ({
  type: types.FETCH_CREATE_BLIP_SUCCESS,
})

const fetchCreateBlipFailure = error => ({
  type: types.FETCH_CREATE_BLIP_FAILURE,
  error
})

export const createBlip = (student_id) => async (dispatch) => {
  const token = await AsyncStorage.getItem('token')
  dispatch(fetchCreateBlipRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/blips?student_id=${student_id}`,
    {
      method: 'POST',
      headers: {
      'Authorization': 'Bearer ' + token
      }
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      response
        .json()
        .then((responseJson) => {
          dispatch(fetchCreateBlipFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchCreateBlipFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchCreateBlipSuccess(responseJson.results))
      }
    })
    .catch((error) => {
      dispatch(fetchCreateBlipFailure(error.message))
    })
}

const fetchMyInfoRequest = () => ({
  type: types.FETCH_MY_INFO_REQUEST
})

const fetchMyInfoSuccess = (data) => ({
  type: types.FETCH_MY_INFO_SUCCESS,
  myInfo: data,
  typeLogedin: data.student
})

const fetchMyInfoFailure = error => ({
  type: types.FETCH_MY_INFO_FAILURE,
  error
})

export const getMyInfo = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token')
  dispatch(fetchMyInfoRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me`,
    {
      method: 'GET',
      headers: {
      'Authorization': 'Bearer ' + token
      }
    }
  )
  .then(r => r.json()).then((responseJson) => dispatch(fetchMyInfoSuccess(responseJson.data)))
}
