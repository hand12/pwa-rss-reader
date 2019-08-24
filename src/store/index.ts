import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { initialState as cardInitialState } from '../ducks/cards/reducers'
import { initialState as stockInitialState } from '../ducks/stocks/reducers'
import { cardsReducer } from '../ducks/cards/reducers'
import { stocksReducer } from '../ducks/stocks/reducers'
import FeedsEpics from '../ducks/feeds/operations'

const epicMiddleware = createEpicMiddleware()
const epics = combineEpics(...FeedsEpics)

function configureStore() {

  const rootInitialState = Object.assign({}, { cards: cardInitialState }, { stocks: stockInitialState })
  const rootReducer = combineReducers({ cards: cardsReducer, stocks: stocksReducer })
  
  return createStore(rootReducer, rootInitialState, applyMiddleware(epicMiddleware))
}

const store = configureStore()
epicMiddleware.run(epics)

export default store
