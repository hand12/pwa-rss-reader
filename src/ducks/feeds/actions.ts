import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const FeedsActions = {
  getFeeds: actionCreator.async<string, any>('GET_FEEDS')
}
