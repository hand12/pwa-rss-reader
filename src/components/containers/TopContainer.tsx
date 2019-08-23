import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { InitialStateType as cardsInitialState } from '../../ducks/cards/reducers'
import { FeedsActions } from '../../ducks/feeds/actions'
import TopPageContents from '../organisms/TopPageContents'

type InitialStateType = cardsInitialState

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getFeeds: (genre: string) => dispatch(FeedsActions.getFeeds(genre))
  }
}

function mapStateToProps(state: InitialStateType) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPageContents)