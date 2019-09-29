import * as types from '../actions/types'

const initialState = {
  cameraPermissionGiven: false
}

const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CAMERA_PERMISSION:
      return {
        ...state,
        cameraPermissionGiven: true
      }
    default:
      return state
  }
}

export default cameraReducer
