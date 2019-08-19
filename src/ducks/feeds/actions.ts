import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const FeedsActions = {
  getFeeds: actionCreator<string>('GET_FEEDS')
}