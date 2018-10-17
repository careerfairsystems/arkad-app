import * as types from './types'

export const toggleChangeMap = map => ({
  type: types.TOGGLE_CHANGE_MAP,
  map
})

export const toggleChangeCompany = company => ({
  type: types.TOGGLE_CHANGE_COMPANY,
  company
})
