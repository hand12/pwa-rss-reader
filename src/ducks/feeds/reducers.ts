// import { feedsActions } from './actions'
import { Feed } from './types'

export const initialState = {
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
    case 'SET_FEEDS':
      return Object.assign({}, state, {
        feeds: action.payload
      })
    default:
      return state
  }
}