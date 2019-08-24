import { Stock } from './types'

export const initialState = []

export type InitialStateType = Stock[]

interface ActionType {
  type: string,
  payload: any
}

export const stocksReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch(action.type) {
    case 'ADD_STOCK':
      return state.concat(action.payload)
    default:
      return state
  }
}