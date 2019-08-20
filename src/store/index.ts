import { createStore, applyMiddleware } from 'redux'
import { feedsReducer } from '../ducks/feeds/reducers'
import FeedsEpics from '../ducks/feeds/operations'
import { createEpicMiddleware, combineEpics } from 'redux-observable'


const epicMiddleware = createEpicMiddleware()
const epics = combineEpics(...FeedsEpics)

function configureStore(initialState = {}) {

  return createStore(feedsReducer, initialState, applyMiddleware(epicMiddleware))
}

const store = configureStore()
epicMiddleware.run(epics)

export default store
