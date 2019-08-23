import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { initialState as cardInitialState } from '../ducks/cards/reducers'
import { cardsReducer } from '../ducks/cards/reducers'
import FeedsEpics from '../ducks/feeds/operations'

const epicMiddleware = createEpicMiddleware()
const epics = combineEpics(...FeedsEpics)

function configureStore() {

  const rootInitialState = Object.assign({}, cardInitialState)
  
  return createStore(cardsReducer, rootInitialState, applyMiddleware(epicMiddleware))
}

const store = configureStore()
epicMiddleware.run(epics)

export default store
