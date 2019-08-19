// import { feedsActions } from './actions'
import { Feed } from './types'

const initialState: { feeds: Feed[] } = {
  feeds: []
}

export interface InitialStateType {
  feeds: Feed[]
}

interface ActionType {
  type: string,
  payload: any
}

export const feedsReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch(action.type) {
    case 'GET_FEEDS':
      console.log('called get feeds')
      return Object.assign({}, state)
    default:
      console.log('called default')
      return state
  }
}