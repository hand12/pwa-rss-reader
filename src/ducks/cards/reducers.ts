import { Card } from './types'

export const initialState = []

export type InitialStateType = Card[]

interface ActionType {
  type: string,
  payload: any
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch(action.type) {
    case 'SET_CARDS':
      return state.concat(action.payload)
    default:
      return state
  }
}