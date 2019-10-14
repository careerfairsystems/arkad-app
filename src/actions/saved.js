import * as types from './types'

const unsetSaved = id => ({
  type: types.UNSET_SAVED,
  id
})

export default unsetSaved
