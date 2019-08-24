import actionCreatorFactory from 'typescript-fsa'
import { Stock } from './types'

const actionCreator = actionCreatorFactory()

export const StocksActions = {
  addStock: actionCreator<Stock>('ADD_STOCK')
}
