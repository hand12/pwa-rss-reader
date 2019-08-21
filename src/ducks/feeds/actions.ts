import actionCreatorFactory from 'typescript-fsa'
import { Feed } from './types'

const actionCreator = actionCreatorFactory()

export const FeedsActions = {
  getFeeds: actionCreator<string>('GET_FEEDS'),
  setFeeds: actionCreator<Feed[]>('SET_FEEDS'),
}
