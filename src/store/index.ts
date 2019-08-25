import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { initialState as cardInitialState } from '../ducks/cards/reducers'
import { initialState as stockInitialState } from '../ducks/stocks/reducers'
import { cardsReducer } from '../ducks/cards/reducers'
import { stocksReducer } from '../ducks/stocks/reducers'
import FeedsEpics from '../ducks/feeds/operations'

const epicMiddleware = createEpicMiddleware()
const epics = combineEpics(...FeedsEpics)

const rootReducer = combineReducers({ cards: cardsReducer, stocks: stocksReducer })

const persistConfig = {
  key: 'RssReader',
  storage,
  whitelist: ['stocks']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStore() {

  const rootInitialState = Object.assign({}, { cards: cardInitialState }, { stocks: stockInitialState })
  
  return createStore(persistedReducer, rootInitialState, applyMiddleware(epicMiddleware))
}

const store = configureStore()
epicMiddleware.run(epics)

export const persistor = persistStore(store)

export default store
