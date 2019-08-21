import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { initialState as feedInitialState } from '../ducks/feeds/reducers'
import { feedsReducer } from '../ducks/feeds/reducers'
import FeedsEpics from '../ducks/feeds/operations'


const epicMiddleware = createEpicMiddleware()
const epics = combineEpics(...FeedsEpics)

function configureStore() {

  const rootInitialState = Object.assign({}, feedInitialState)

  return createStore(feedsReducer, rootInitialState, applyMiddleware(epicMiddleware))
}

const store = configureStore()
epicMiddleware.run(epics)

export default store
