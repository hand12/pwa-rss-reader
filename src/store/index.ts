import { createStore } from 'redux'
import { feedsReducer } from '../ducks/feeds/reducers'

function configureStore(initialState = {}) {

  return createStore(feedsReducer)
}

const store = configureStore()

export default store
