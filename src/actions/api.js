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

const fetchLoginSuccess = (typeLogedin) => ({
  type: types.FETCH_LOGIN_SUCCESS,
  logedIn: true,
  typeLogedin: typeLogedin
})

const fetchLoginFailure = error => ({
  type: types.FETCH_LOGIN_FAILURE,
  error
})

export const loadLogin = (username, password, type) => (dispatch) => {
  dispatch(fetchLoginRequest())
  return fetch(
    // `https://arkad-nexpo.herokuapp.com/api/login?email=${username}&password=${password}`,
    `https://arkad-nexpo.herokuapp.com/api/login?email=arvid.pilhall@me.com&password=123456789`,
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
        dispatch(fetchLoginSuccess(type))
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
  comment: data,
})

const fetchCommentStudentFailure = error => ({
  type: types.FETCH_COMMENT_STUDENT_FAILURE,
  error
})

export const commentRateStudent = (studentId, rating, comment) => (dispatch) => {
  dispatch(fetchCommentStudentRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/comments/${studentId}?rating=${rating}&comment=${comment}`,
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

export const getBlips = () => (dispatch) => {
  dispatch(fetchBlipsRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/blips`,
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
          dispatch(fetchBlipsFailure(responseJson.error.title))
        })
        .catch((error) => {
          dispatch(fetchBlipsFailure(error.message))
        })
      return null
    })
    .then((responseJson) => {
      if (responseJson) {
        dispatch(fetchBlipsSuccess(responseJson.results))
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

export const removeBlippedStudent = (studentId) => (dispatch) => {
  dispatch(fetchRemoveBlippedStudentRequest())
  return fetch(
    `https://arkad-nexpo.herokuapp.com/api/me/company/blips/${studentId}`,
    {
      method: 'DELETE',
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
