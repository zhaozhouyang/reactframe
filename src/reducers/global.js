import {api} from '~/src/api'
import update from 'immutability-helper'

const initialState = {
  moduleList: []
}

const GET_MODULES = 'modules/get'

export const getModules = () => {
  return (dispatch, getState) => {
    api('api/modules').then(moduleList => {
      dispatch({
        type: GET_MODULES,
        payload: moduleList
      })
    })
  }
}

export const actions = {
  getModules
}

const ACTION_HANDLERS = {
  [GET_MODULES] : (state, action) => {
    return update(state, {
      moduleList: {
        $set: action.payload
      }
    })
  }
}

const modules = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default modules
