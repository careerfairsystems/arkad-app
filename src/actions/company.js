import * as types from './types'

export const toggleShowFavorites = () => ({
  type: types.TOGGLE_SHOW_FAVORITES
})

export const searchCompany = text => ({
  type: types.SEARCH_COMPANY,
  text
})

export const addCompanyFilter = (id, filters) => ({
  type: types.ADD_COMPANY_FILTER,
  id,
  filters
})

export const clearCompanyFilter = () => ({
  type: types.CLEAR_COMPANY_FILTER
})
