import StringSimilarity from 'string-similarity'
import * as types from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: ''
}

const filterCompany = (items, text) => {
  const append = '$' // Append a $ to improve the search, otherwise one character matches are ignored
  const { ratings } = StringSimilarity.findBestMatch(
    append + text,
    items.map(item => append + item.name)
  )
  const sortedItems = items
    .map((item) => {
      const rating = ratings.find(value => value.target === append + item.name)
      const sortedItem = { ...item, rating: rating.rating }
      return sortedItem
    })
    .filter(item => item.rating !== 0)
    .sort((a, b) => b.rating - a.rating)
  return sortedItems
}

const companyReducer = (state = initialState, action) => {
  let items
  switch (action.type) {
    case types.FETCH_COMPANIES_REQUEST:
      return { ...state, loading: true, errorMessage: '' }
    case types.FETCH_COMPANIES_SUCCESS:
      items = action.companies.map(item => ({
        key: item.id.toString(),
        name: item.name
      }))
      return {
        ...state,
        items,
        allItems: items,
        loading: false
      }
    case types.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        items: [],
        allItems: [],
        loading: false,
        error: action.error
      }
    case types.SEARCH_COMPANY:
      return {
        ...state,
        items: action.text !== '' ? filterCompany(state.allItems, action.text) : state.allItems
      }
    default:
      return state
  }
}

export default companyReducer
