import { Card } from './types'

export const initialState = {
  cards: []
}

export interface InitialStateType {
  cards: Card[]
}

interface ActionType {
  type: string,
  payload: any
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch(action.type) {
    case 'SET_CARDS':
      return Object.assign({}, state, {
        cards: action.payload
      })
    default:
      return state
  }
}