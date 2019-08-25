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
      if (state.find(stock => stock.id === action.payload.id)) return state
      return state.concat(action.payload)
    case 'READ_STOCK':
      const stocks = state.map(stock => {
        if (stock.id === action.payload) { stock.isRead = true }
        return stock
      })
      return stocks
    default:
      return state
  }
}