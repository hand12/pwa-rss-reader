import actionCreatorFactory from 'typescript-fsa'
import { Card } from './types'

const actionCreator = actionCreatorFactory()

export const CardsActions = {
  setCards: actionCreator<Card[]>('SET_CARDS')
}
