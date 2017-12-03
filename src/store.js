import { createStore, combineReducers, compose } from 'redux'
import global from './reducers/global'
import DevTools from '~/build/DevTools'

const reducers = combineReducers({
  global
})

let store = createStore(reducers, {}, compose(DevTools.instrument()))

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducers)
}

export default store
