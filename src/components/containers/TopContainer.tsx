import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { InitialStateType } from '../../ducks/feeds/reducers'
import { FeedsActions } from '../../ducks/feeds/actions'
import TopPageContents from '../organisms/TopPageContents'

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getFeeds: (genre: string) => dispatch(FeedsActions.getFeeds(genre))
  }
}

// function mapStateToProps(state: InitialStateType) {
//   return Object.assign({}, state.feeds)
// }

export default connect(mapDispatchToProps, {})(TopPageContents)