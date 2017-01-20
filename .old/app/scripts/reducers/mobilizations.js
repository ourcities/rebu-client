import {
  REQUEST_EDIT_MOBILIZATION,
  SUCCESS_EDIT_MOBILIZATION,
  FAILURE_EDIT_MOBILIZATION,
  // TODO: deprecate this action
  EDIT_MOBILIZATION,
  // TODO implement REQUEST, SUCCESS and FAILURE for ADD_MOBILIZATION
  ADD_MOBILIZATION
} from './../constants/ActionTypes'

const initialState = {
  loaded: false,
  editing: false,
  data: []
}

export default function mobilizations (state = initialState, action) {
  switch (action.type) {
    // TODO impllement REQUEST, SUCCESS and FAILURE action types
    case ADD_MOBILIZATION:
      return {...state, data: [action.mobilization, ...state.data]}

    // TODO deprecate this action type
    case EDIT_MOBILIZATION:
      return {
        ...state,
        data: state.data.map(
          m => m.id === action.mobilization.id ? action.mobilization : m
        )
      }

    case REQUEST_EDIT_MOBILIZATION:
      return {...state, editing: true}
    case SUCCESS_EDIT_MOBILIZATION:
      return {
        ...state,
        editing: false,
        data: state.data.map(
          m => m.id === action.result.id ? action.result : m
        )
      }
    case FAILURE_EDIT_MOBILIZATION:
      return {...state, editing: false}
    default:
      return state
  }
}

export function isMobilizationsLoaded (globalState) {
  return globalState.mobilizations.loaded
}
