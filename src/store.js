import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import global from './reducers/global'

import DevTools from '~/build/DevTools'

const reducers = combineReducers({
  global
})

let store = createStore(reducers, {}, compose(applyMiddleware(thunk), DevTools.instrument()))

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducers, applyMiddleware(thunk))
}

export default store
