import { createStore, combineReducers } from 'redux'
import { feedsReducer } from '../ducks/feeds/reducers'

function configureStore(initialState = {}) {

  return createStore(
    combineReducers({
      feeds: feedsReducer
    }), initialState
  )
}

const store = configureStore()

export default store
