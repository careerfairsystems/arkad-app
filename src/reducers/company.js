import * as types from '../actions/types'

const initialState = {
  searchText: '',
  desiredProgramme: [],
  weOffer: [],
  industry: [],
  desiredDegree: [],
  showFavorites: false,
  refreshing: false
}

const companyReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case types.FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        refreshing: true
      }
    case types.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        refreshing: false
      }
    case types.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        refreshing: false
      }
    case types.TOGGLE_SHOW_FAVORITES:
      return { ...state, showFavorites: !state.showFavorites }
    case types.SEARCH_COMPANY:
      return {
        ...state,
        searchText: action.text
      }
    case types.ADD_COMPANY_FILTER:
      newState = { ...state }
      newState[action.id] = action.filters
      return newState
    case types.CLEAR_COMPANY_FILTER:
      return {
        ...state,
        desiredProgramme: [],
        weOffer: [],
        industry: [],
        desiredDegree: []
      }
    default:
      return state
  }
}

export default companyReducer
