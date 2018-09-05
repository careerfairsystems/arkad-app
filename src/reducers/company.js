import * as types from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: ''
}

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMPANIES_REQUEST:
      return { ...state, loading: true, errorMessage: '' }
    case types.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        items: action.companies.map(item => ({
          key: item.id.toString(),
          name: item.name
        })),
        loading: false
      }
    case types.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default companyReducer
